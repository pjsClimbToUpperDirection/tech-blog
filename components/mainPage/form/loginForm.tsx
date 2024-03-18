"use client"

import Link from "next/link";
import InputElement from "./input/inputElement";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import SubmitBtn from "./button/submitBtn";
import {useRouter} from "next/navigation";
import {SignInForm} from "../../../interface/ForSignIn";
import responseHandler from "../../../function/logIn_out/responseHandler";


export default function LoginForm({
    sharedId1,
    sharedId2,
    loginUrl,
    }:{
    sharedId1: string,
    sharedId2: string,
    loginUrl: string
}) {
    const submitBtnId = "submitBtn";
    const {
        register,
        handleSubmit
    } = useForm<SignInForm>();

    const router = useRouter();

    const onSubmit: SubmitHandler<SignInForm> = async (data: SignInForm) => {
        let response= await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": data.username,
                "password": data.password
            }),
        })
        if (response.status == 200) {
            responseHandler(response)
            router.replace(`/${data.username}/main/1`)
        } else if (response.status == 401) {
            reactiveText("loginFailed")
        } else {
            reactiveText("loginFailed")
        }
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
            setCustomOfUsername("");
            setCustomOfPassword("");
            textContainer.classList.add("previousActionByLoginFailure")
            textContainer.classList.remove("reactionByLoginFailure")
            setTimeout(() => {
                setCustomOfSubmitBtnText("Failed")
                setTimeout(() => {
                    textContainer.classList.add("reactionByLoginFailure")
                },40)
            }, 200)
        }
    }

    return (
        <div className={"w-full h-full relative"}>
            <div
                className={"absolute w-full bg-black h-[550px] top-[70px] md:h-[600px] lg:h-[620px] md:bg-black opacity-70 rounded-2xl grid grid-rows-7"}>
                <div className={"w-full h-full row-span-1 text-white grid content-center justify-items-center"}>
                    <p>로그인 양식 작성</p>
                </div>
                <div className={"w-full h-full row-span-5 p-2 sm:p-4 md:p-6"}>
                    <form className={"w-full h-full grid grid-rows-4"} onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className={"w-full h-full row-span-3 grid grid-rows-2"}>
                            <div className={"w-full h-full row-span-1 p-1 sm:p-2 md:p-4"}>
                                <InputElement
                                    placeholder={"사용자 이름 (ID)"}
                                    type={"text"}
                                    register={register}
                                    alias={"username"}
                                    options={{
                                        required: "사용자 이름을 입력하여 양식 작성 요청",
                                        minLength: {
                                            value: 3,
                                            message: "3자 이상 입력"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: '20자 이하로 입력'
                                        }}}
                                    message={customOfUsername}
                                    indicatorId={sharedId1}
                                    errorMsgAreaId={"msgArea1"} />
                            </div>
                            <div className={"w-full h-full row-span-1 p-1 sm:p-2 md:p-4"}>
                                <InputElement
                                    placeholder={"암호 (Password)"}
                                    type={"password"}
                                    register={register}
                                    alias={"password"}
                                    options={{
                                        required: "암호 입력",
                                        minLength: {
                                            value: 1,
                                            message: "1자 이상 입력"
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
                        <div className={"w-full h-full row-span-1 p-1 py-4 sm:p-2 md:p-4"}>
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