"use client"

import React, {useState} from "react";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import InputElement from "../input/inputElement";
import InputElementWithVar from "../input/inputElementWithVar";
import TokenStore from "../../tokenStorage/redux/store";
import {useRouter} from "next/navigation";

interface Re_VerificationFormInput {
    passcode: string
}

interface TokenForRe_Verification {
    accessToken: string // 재차 인증을 위한 토큰
}


export default function Re_verificationForm({
    url,
    buttonText,
    params
    }:{
    url: string,
    buttonText: string,
    params: { action: string, user: string, what: string, for: string }
}) {
    const {
        register,
        handleSubmit
    } = useForm<Re_VerificationFormInput>();

    const router = useRouter();

    const [ customOfPasscode, setCustomOfPasscode ] = useState("");

    const onSubmit: SubmitHandler<Re_VerificationFormInput> = async (data: Re_VerificationFormInput) => {
        let response= await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": TokenStore.getState().value,
                "refresh": sessionStorage.getItem("RefreshToken"),
            },
            body: JSON.stringify({
                "password": data.passcode
            }),
        })
        if (response.status == 200) {
            response.json().then((data: TokenForRe_Verification) => sessionStorage.setItem("ForRe_Verification", data.accessToken))
            router.push(`/${params.action}/${params.what}/${params.for}/${params.user}`)
        } else if (response.status == 401) {
            setCustomOfPasscode("암호가 올바른지 다시 확인")
        }
    }

    const onError: SubmitErrorHandler<Re_VerificationFormInput> = (error: FieldErrors<Re_VerificationFormInput>) => {
        // 유효성 검증 과정에서 문제가 식별되었을 시 작동
        setCustomOfPasscode(error.passcode.message)
    }
    return (
        <form className={"h-full grid grid-rows-2"} onSubmit={handleSubmit(onSubmit, onError)}>
            <div className={"row-span-1"}>
                <InputElementWithVar type={"password"}
                                     placeholder={"/confirm/password%_"}
                                     value={undefined}
                                     id={"passcode"}
                                     options={{
                                         required: "암호를 다시 입력하여 확인 절차 이행",
                                         minLength: {
                                         value: 3,
                                         message: "3자 이상 입력"
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