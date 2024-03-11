"use client"

import InputElement from "../input/inputElement";
import InputElementWithVar from "../input/inputElementWithVar"
import FormForModification from "../modification/formForModification";
import React, {useEffect, useState} from "react";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";

interface emailAddressModificationForm {
    emailAddress: string | undefined,
    authNumber: string | undefined
}

export default function emailAddressModificationForm({
    initUrl,
    mainUrl
    }:{
    initUrl: string,
    mainUrl: string
    }) {
    let EmailInputForm: HTMLInputElement;

    const {
        register,
        handleSubmit,
        watch
    } = useForm<emailAddressModificationForm>();

    const [requested, setRequested] = useState(0);


    // axios 사용하여 인증번호 요청, 주소 변경 요청 구현해 보기
    // 주소 변경 요청 시 InputValue(주소), 인증번호 담아서 요청하기
    const onSubmit: SubmitHandler<emailAddressModificationForm> = async (data: emailAddressModificationForm) => {
        if (requested == 0) {
            EmailInputForm = document.getElementById("emailAddress") as HTMLInputElement
            EmailInputForm.value = ""
            setRequested(1);
            console.log(data);
            //await sendInitRequest(initUrl)
        } else {
            console.log(data);
            //await sendMainRequest(mainUrl, AuthNumber)
            // todo 리다이렉션 등과 같은 요청 후 처리 로직 작성할 것
        }
    }

    const onError: SubmitErrorHandler<emailAddressModificationForm> = (error: FieldErrors<emailAddressModificationForm>) => {
        // 유효성 검증 과정에서 문제가 식별되었을 시 작동
        setCustomOfEmail("")
        setCustomOfAuthNumber("")
        switch (true) {
            case error.emailAddress != undefined: {
                setCustomOfEmail(error.emailAddress.message)
                break
            }
            case error.authNumber != undefined: {
                setCustomOfAuthNumber(error.authNumber.message)
                break
            }
        }
    }

    const [ customOfEmail, setCustomOfEmail ] = useState("");
    const [ customOfAuthNumber, setCustomOfAuthNumber ] = useState("");

    async function sendInitRequest(SubstitutedUrl: string) {
        let response= await fetch(SubstitutedUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo",
                "Authorization_Modification_Email": "" // 이메일 인증 번호를 보낼때 본인임을 인증하는 토큰
            },
            body: JSON.stringify({
                "email": ""
            }),
        })
        console.log(response)
        if (response.ok) {
            alert("ok")
        } else if (response.status == 401) {
            alert("nope")
        } else {
            alert("other")
        }
    }

    async function sendMainRequest(SubstitutedUrl: string, AuthNumber: string) {
        let transformed1 = AuthNumber.slice(0,3);
        let transformed2 = AuthNumber.slice(3,6);
        let response= await fetch(SubstitutedUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo",
            },
            body: JSON.stringify({ // 인증번호
                "num1": transformed1,
                "num2": transformed2
            }),
        })
        console.log(response)
        if (response.ok) {
            alert("ok")
        } else if (response.status == 401) {
            alert("nope")
        } else {
            alert("other")
        }
    }

    return (
        <FormForModification handleSubmit={handleSubmit(onSubmit, onError)}>
            <div className={"w-full h-[230px] sm:border-2 border-slate-200 grid content-center grid-rows-5"}>
                <div className={"w-full h-full px-[30px] row-start-2 row-span-3 grid grid-rows-2"}>
                    {requested == 0 ?
                        <>
                            <div className={"w-full h-full row-span-1"}>
                                <InputElementWithVar
                                    placeholder={"변경하고자 하는 이메일 주소"}
                                    type={"text"}
                                    value={undefined}
                                    id={"emailAddress"}
                                    message={customOfEmail}
                                    options={{
                                        required: "인증 번호를 수신하기 위하여 주소 입력",
                                        minLength: {
                                            value: 10,
                                            message: "10자 이상 입력"
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "30자 이상 입력"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "통상적인 이메일 표현식에 맞추어 입력"
                                        } }}
                                    register={register}
                                    alias={"emailAddress"}/>
                            </div>
                            <div className={"w-full h-full row-span-1"}>
                                <InputElement
                                    type={"submit"}
                                    placeholder={""}
                                    custom={"border-2 border-white rounded"}
                                    value={"인증번호 요청"}/>
                            </div>
                        </>
                        :
                        <>
                            <div className={"w-full h-full row-span-1"}>
                                <InputElementWithVar
                                    placeholder={"인증 번호 입력"}
                                    type={"text"}

                                    value={undefined}
                                    id={"authNumber"}
                                    message={customOfAuthNumber}
                                    options={{
                                        required: "인증 번호 입력이 요구됨",
                                        pattern: {
                                            value: /[0-9]{6}/,
                                            message: "6자리 숫자 입력"
                                        }
                                    }}
                                    register={register}
                                    alias={"authNumber"}/>
                            </div>
                            <div className={"w-full h-full row-span-1"}>
                                <InputElement
                                    type={"submit"}
                                    placeholder={""}
                                    custom={"border-2 border-white rounded"}
                                    value={"주소 변경 요청"}/>
                            </div>
                        </>
                    }
                </div>
            </div>
        </FormForModification>
    )
}