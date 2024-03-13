"use client"

import Link from "next/link";
import InputElement from "./input/inputElement";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import SubmitBtn from "./button/submitBtn";


interface SignInForm {
    username: string,
    password: string,
}

export default function LoginForm({
    sharedId1,
    sharedId2
    }:{
    sharedId1: string,
    sharedId2: string
}) {
    const submitBtnId = "submitBtn";

    const {
        register,
        handleSubmit
    } = useForm<SignInForm>();

    const onSubmit: SubmitHandler<SignInForm> = async (data: SignInForm) => {
        console.log(data)
        reactiveText("loginFailed") // Todo 본 함수는 요청이 실패하였을 경우 호출하므로 요청 전송 로직 작성 시 적절한 위치로 이동
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

    const onError: SubmitErrorHandler<SignInForm> = (error: FieldErrors<SignInForm>) => {
        setCustomOfUsername("")
        setCustomOfPassword("")
        switch (true) {
            case error.username != undefined: {
                setCustomOfUsername(error.username.message)
                reactiveText("invalidForm")
                break
            }
            case error.password != undefined: {
                setCustomOfPassword(error.password.message)
                reactiveText("invalidForm")
                break
            }
        }
    }

    const [ customOfUsername, setCustomOfUsername ] = useState("");
    const [ customOfPassword, setCustomOfPassword ] = useState("");
    const [ customOfSubmitBtnText , setCustomOfSubmitBtnText ] = useState("Sign_Up")

    function reactiveText(inCase: "invalidForm" | "loginFailed") {
        let textContainer = document.getElementById(submitBtnId);
        if (inCase == "invalidForm") {
            textContainer.classList.remove("reactionByInvalidForm")
            setTimeout(() => {
                textContainer.classList.add("reactionByInvalidForm")
            }, 50)
        } else {
            textContainer.classList.add("previousActionByLoginFailure")
            textContainer.classList.remove("reactionByLoginFailure")
            setTimeout(() => {
                setCustomOfSubmitBtnText("ID 혹은 암호가 올바르지 않음")
                setTimeout(() => {
                    textContainer.classList.add("reactionByLoginFailure")
                },40)
            }, 200)
        }
    }
    /*
    * setCustomOfSubmitBtnText("ID 혹은 암호가 올바르지 않음")
            textContainer.classList.remove("reactionByLoginFailure")
            setTimeout(() => {
                textContainer.classList.add("reactionByLoginFailure")
            },100)*/

    return (
        <div className={"w-full h-full relative"}>
            <div
                className={"absolute w-full bg-black h-[550px] top-[70px] md:h-[600px] lg:h-[620px] md:bg-black opacity-70 rounded-2xl grid grid-rows-7"}>
                <div className={"w-full h-full row-span-1 text-white grid content-center justify-items-center"}>
                    <p>로그인 양식 작성</p>
                </div>
                <div className={"w-full h-full row-span-5 p-6"}>
                    <form className={"w-full h-full grid grid-rows-4"} onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className={"w-full h-full row-span-3 grid grid-rows-2"}>
                            <div className={"w-full h-full row-span-1 p-4"}>
                                <InputElement
                                    placeholder={"사용자 이름 (ID)"}
                                    type={"text"}
                                    register={register}
                                    alias={"username"}
                                    options={{
                                        required: "사용자 이름을 입력하여 양식 작성 요청",
                                        minLength: {
                                            value: 5,
                                            message: "5자 이상 입력"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: '20자 이하로 입력'
                                        }}}
                                    message={customOfUsername}
                                    indicatorId={sharedId1}
                                    errorMsgAreaId={"msgArea1"} />
                            </div>
                            <div className={"w-full h-full row-span-1 p-4"}>
                                <InputElement
                                    placeholder={"암호 (Password)"}
                                    type={"password"}
                                    register={register}
                                    alias={"password"}
                                    options={{
                                        required: "암호 입력",
                                        minLength: {
                                            value: 15,
                                            message: "15자 이상 입력"
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "30자 이하로 입력"
                                        }}}
                                    message={customOfPassword}
                                    indicatorId={sharedId2}
                                    errorMsgAreaId={"msgArea2"}/>
                            </div>
                        </div>
                        <div className={"w-full h-full row-span-1 p-4"}>
                            <div className={"w-full h-full"}>
                                <SubmitBtn
                                    content={customOfSubmitBtnText}
                                    innerContentId={submitBtnId} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={"w-full h-full row-span-1 text-white px-10 py-4"}>
                    <p>아직 소유한 계정이 없을 시 <Link href={"/signup"} className={"text-orange-500"} prefetch={false}>회원가입</Link></p>
                </div>
            </div>
        </div>
    )
}