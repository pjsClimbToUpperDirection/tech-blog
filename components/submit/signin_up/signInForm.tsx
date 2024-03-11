"use client"

import InputElementWithVar from "../../input/inputElementWithVar";
import InputElement from "../../input/inputElement";
import {useState} from "react";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";

interface SignInFormInput {
    username: string,
    password: string,
}

// todo 유효성 검증 구현 완료됨, 이후 필요한 로직 구현(요청, 응답, 리디렉션)
export default function SignInForm({
    url,
    method,
    }:{
    url: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
}) {
    const {
        register,
        handleSubmit
    } = useForm<SignInFormInput>();


    const onSubmit: SubmitHandler<SignInFormInput> = async (data: SignInFormInput) => {
        console.log(data)
        /*let response= await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo"
            },
            body: JSON.stringify({
                "Username": username,
                "Password": password
            }),
        })
        console.log(response)
        if (response.status == 200) {
            response.json().then((data) => console.log(data)) // todo json 타입으로 정상 변환됨, 브라우저 내부에 임시 토큰 저장하는 로직 구현할 것
        } else if (response.status == 401) {
            alert("nope") // todo 비밀번호가 유효하지 않다는 걸 사용자에게 알리기
        } else {
            alert("other") // todo 500번대 서버 에러일 가능성 농후, 적절히 대처
        } */
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
                                                 value: 5,
                                                 message: "5자 이상 입력"
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
                                                 value: 15,
                                                 message: "15자 이상 입력"
                                             },
                                             maxLength: {
                                                 value: 30,
                                                 message: "30자 이하로 입력"
                                             }
                                         }}/>
                </div>
                <div className={"row-span-1"}>
                    <InputElement type={"submit"} placeholder={""}
                                  custom={"w-full border-2 border-white rounded"} value={"sign_in"}/>
                </div>
            </form>
        </>
    )
}