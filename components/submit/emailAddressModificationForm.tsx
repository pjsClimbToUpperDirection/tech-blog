"use client"

import InputElement from "../input/inputElement";
import InputElementWithVar from "../input/inputElementWithVar"
import FormForModification from "../modification/formForModification";
import React, {useEffect, useState} from "react";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import TokenStore from "../../tokenStorage/redux/store";
import {useRouter} from "next/navigation";

interface emailAddressModificationForm {
    emailAddress: string | undefined,
    authNumber: string | undefined
}

export default function emailAddressModificationForm({
    requestUrl,
    verificationUrl
    }:{
    requestUrl: string,
    verificationUrl: string,
    }) {
    let EmailInputForm: HTMLInputElement;

    const {
        register,
        handleSubmit
    } = useForm<emailAddressModificationForm>();

    const router = useRouter();

    const [requested, setRequested] = useState(0);

    const [customOfEmail, setCustomOfEmail] = useState("");
    const [customOfAuthNumber, setCustomOfAuthNumber] = useState("");


    // axios 사용하여 인증번호 요청, 주소 변경 요청 구현해 보기
    // 주소 변경 요청 시 InputValue(주소), 인증번호 담아서 요청하기
    const onSubmit: SubmitHandler<emailAddressModificationForm> = async (data: emailAddressModificationForm) => {
        if (requested == 0) {
            EmailInputForm = document.getElementById("emailAddress") as HTMLInputElement
            EmailInputForm.value = ""
            let response = await fetch(requestUrl, { // 인증번호 요청
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": TokenStore.getState().value,
                    "refresh": sessionStorage.getItem("RefreshToken"),
                    "Authorization_Modification_Email": sessionStorage.getItem("ForRe_Verification")
                },
                body: JSON.stringify({
                    "email": data.emailAddress
                }),
            })
            if (response.status == 204) {
                sessionStorage.removeItem("ForRe_Verification")
                setRequested(1);
            } else {
                setCustomOfEmail("인증번호 요청 정상 처리에 실패")
            }
        } else {
            setCustomOfAuthNumber("");
            let transformed1 = data.authNumber.slice(0, 3);
            let transformed2 = data.authNumber.slice(3, 6);
            let response = await fetch(verificationUrl, { // 인증번호를 통한 이메일 변경 요청
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": TokenStore.getState().value,
                    "refresh": sessionStorage.getItem("RefreshToken")
                },
                body: JSON.stringify({ // 인증번호
                    "num1": transformed1,
                    "num2": transformed2
                }),
            })
            console.log(response)
            if (response.status == 200) {
                router.replace(`/logout`)
            } else if (response.status == 401) {
                setCustomOfAuthNumber("인증번호 부정확")
            } else if (response.status == 404) {
                setCustomOfAuthNumber("해당하는 이메일 주소를 찾을 수 없음")
            }
        }
    }

        const onError: SubmitErrorHandler<emailAddressModificationForm> = (error: FieldErrors<emailAddressModificationForm>) => {
            // 유효성 검증 과정에서 문제가 식별되었을 시 작동
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

        return (
            <FormForModification handleSubmit={handleSubmit(onSubmit, onError)}>
                <div className={"w-full h-[350px] sm:border-2 border-slate-200 grid content-center grid-rows-5"}>
                    <div className={"w-full h-full px-[30px] row-start-2 row-span-4 grid grid-rows-4"}>
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
                                            }
                                        }}
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
                                <div className={"w-full h-full row-span-2 text-gray-200"}>
                                    <p>
                                        유효한 이메일 주소가 요구됩니다. 본인이 추후 접근하기 어려운 주소를 사용할 시 계정 접근이 제한될 수 있습니다.
                                    </p>
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
                                    <InputElement type={"submit"}
                                                  placeholder={""}
                                                  custom={"border-2 border-white rounded"}
                                                  value={"눌러서 주소 변경 요청"}/>
                                </div>
                                <div className={"row-span-2 text-gray-200"}>
                                    <p>
                                        6자리의 인증번호는 회원가입 양식 작성 시 입력된 주소로 전송되며 유효기간 만료 시 양식을 다시 작성해야 함에 유념하시기 바랍니다.
                                    </p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </FormForModification>
        )
}