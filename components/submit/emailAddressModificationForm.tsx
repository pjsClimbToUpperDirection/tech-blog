"use client"

import InputElement from "../input/inputElement";
import FormForModification from "../modification/formForModification";
import React, {useState} from "react";

// 상태가 바뀔 시
export default function emailAddressModificationForm() {
    const [requested, setRequested] = useState(0)
    function handleAuthNumberRequest(event) {
        setRequested(1)
        event.preventDefault(); // 기본 제출 동작 중단
        // 여기서 form 데이터를 처리하거나 다른 작업 수행
        console.log('auth')
    }
    function handleSubmit(event) {
        event.preventDefault(); // 기본 제출 동작 중단
        // 여기서 form 데이터를 처리하거나 다른 작업 수행
        console.log('submit')
    }

    if (requested == 0) {
        return (
            <FormForModification handleSubmit={handleAuthNumberRequest}>
                <div className={"w-full h-[230px] sm:border-2 border-slate-200 grid content-center"}>
                    <div className={"w-full h-fit"}>
                        <InputElement placeholder={"변경하고자 하는 이메일 주소"} id={""} custom={"m-3 mx-5"} type={"email"}
                                      value={undefined}/>
                    </div>
                    <div className={"w-full h-fit"}>
                        <InputElement type={"submit"} placeholder={""}
                                      custom={"border-2 border-white rounded m-4"} value={"인증번호 발송"} id={"MultiSubmitForm"}/>
                    </div>
                </div>
            </FormForModification>
        )
    } else {
        return (
            <FormForModification handleSubmit={handleSubmit}>
                <div className={"w-full h-[230px] sm:border-2 border-slate-200 grid content-center"}>
                    <div className={"w-full h-fit"}>
                        <InputElement placeholder={"인증번호"} id={""} custom={"m-3 mx-5"} type={"email"}
                                      value={undefined}/>
                    </div>
                    <div className={"w-full h-fit"}>
                        <InputElement type={"submit"} placeholder={""}
                                      custom={"border-2 border-white rounded m-4"} value={"주소 변경 요청"} id={"MultiSubmitForm"}/>
                    </div>
                </div>
            </FormForModification>
        )
    }
}