"use client"

import React, {useState} from "react";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import InputElement from "../input/inputElement";
import InputElementWithVar from "../input/inputElementWithVar";

interface Re_VerificationFormInput {
    passcode: string
}


// todo 유효성 검증 구현 완료됨, 이후 필요한 로직 구현(요청, 응답, 리디렉션)
export default function Re_verificationForm({
    url,
    method,
    buttonText
    }:{
    url: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
    buttonText: string
}) {
    const {
        register,
        handleSubmit
    } = useForm<Re_VerificationFormInput>();

    const [ customOfPasscode, setCustomOfPasscode ] = useState("");

    const onSubmit: SubmitHandler<Re_VerificationFormInput> = async (data: Re_VerificationFormInput) => {
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
                "password": passcode
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

    const onError: SubmitErrorHandler<Re_VerificationFormInput> = (error: FieldErrors<Re_VerificationFormInput>) => {
        // 유효성 검증 과정에서 문제가 식별되었을 시 작동
        setCustomOfPasscode(error.passcode.message)
    }
    return (
        <form className={"h-full grid grid-rows-2"} onSubmit={handleSubmit(onSubmit, onError)}>
            <div className={"row-span-1"}>
                <InputElementWithVar type={"text"}
                                     placeholder={"/confirm/password%_"}
                                     value={undefined}
                                     id={"passcode"}
                                     options={{
                                         required: "암호를 다시 입력하여 확인 절차 이행",
                                         minLength: {
                                         value: 15,
                                         message: "15자 이상 입력"
                                     },
                                         maxLength: {
                                         value: 30,
                                         message: "30자 이하로 입력"
                                     },
                                     }}
                                     register={register}
                                     message={customOfPasscode}
                                     alias={"passcode"}/>
            </div>
            <div className={"row-span-1"}>
                <InputElement type={"submit"} placeholder={""}
                              custom={"w-full border-2 border-white rounded"}
                              value={buttonText}/>
            </div>
        </form>
    )
}