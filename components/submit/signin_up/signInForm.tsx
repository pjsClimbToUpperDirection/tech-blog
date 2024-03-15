"use client"

import InputElementWithVar from "../../input/inputElementWithVar";
import InputElement from "../../input/inputElement";
import {useState} from "react";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import TokenStore from "../../../tokenStorage/redux/store";

interface SignInFormInput {
    username: string,
    password: string,
}
interface issuedTokens {
    accessToken: string,
    refreshToken: string
}

// todo 유효성 검증 구현 완료됨, 이후 필요한 로직 구현(요청, 응답, 리디렉션)
export default function SignInForm({
    signInUrl,
    method,
    }:{
    signInUrl: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
}) {
    const {
        register,
        handleSubmit
    } = useForm<SignInFormInput>();


    const onSubmit: SubmitHandler<SignInFormInput> = async (data: SignInFormInput) => {
        console.log(data)
        let response= await fetch(signInUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": data.username,
                "password": data.password
            }),
        })
        console.log(response)
        if (response.status == 200) {
            // todo 리다이렉션 로직 구현
            response.json().then((data: issuedTokens) => {
                TokenStore.dispatch({
                    type: "set/accessToken",
                    payload: data.accessToken
                })
                sessionStorage.setItem("RefreshToken", data.refreshToken)
            })
            history.back(); // 본 로그인 폼은 루트 경로가 아닌 다른 경로로 접근을 시도할 시 출력되므로 로그인 성공 시 이전 페이지로 돌아감
        } else if (response.status == 401) {
            setCustomOfButtonText("입력 값 확인 후 재시도")
        } else {
            setCustomOfButtonText("입력 값 확인 후 재시도")
        }
    }

    const onError: SubmitErrorHandler<SignInFormInput> = (error: FieldErrors<SignInFormInput>) => {
        setCustomOfUsername("")
        setCustomOfPassword("")
        switch (true) {
            case error.username != undefined: {
                setCustomOfUsername(error.username.message)
                break
            }
            case error.password != undefined: {
                setCustomOfPassword(error.password.message)
                break
            }
        }
    }

    const [ customOfUsername, setCustomOfUsername ] = useState("");
    const [ customOfPassword, setCustomOfPassword ] = useState("");
    const [ customOfButtonText, setCustomOfButtonText ] = useState("Sign In")

    return (
        <>
            <form className={"h-full grid grid-rows-3"} onSubmit={handleSubmit(onSubmit, onError)}>
                <div className={"row-span-1"}>
                    <InputElementWithVar type={"text"}
                                         placeholder={"/user/username%_"}
                                         value={undefined}
                                         id={"id_signInForm"}
                                         alias={"username"}
                                         message={customOfUsername}
                                         register={register}
                                         options={{
                                             required: "사용자 이름을 입력하여 양식 작성 요청",
                                             minLength: {
                                                 value: 2,
                                                 message: "2자 이상 입력"
                                             },
                                             maxLength: {
                                                 value: 20,
                                                 message: '20자 이하로 입력'
                                             }
                                         }}/>
                </div>
                <div className={"row-span-1"}>
                    <InputElementWithVar type={"password"}
                                         placeholder={"/login/pw%_"}
                                         value={undefined}
                                         id={"pw_signInForm"}
                                         alias={"password"}
                                         message={customOfPassword}
                                         register={register}
                                         options={{
                                             required: "비밀번호를 입력하여 로그인을 요청",
                                             minLength: {
                                                 value: 2,
                                                 message: "2자 이상 입력"
                                             },
                                             maxLength: {
                                                 value: 30,
                                                 message: "30자 이하로 입력"
                                             }
                                         }}/>
                </div>
                <div className={"row-span-1"}>
                    <InputElement type={"submit"} placeholder={""}
                                  custom={"w-full border-2 border-white rounded"} value={customOfButtonText}/>
                </div>
            </form>
        </>
    )
}