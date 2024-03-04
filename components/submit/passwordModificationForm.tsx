"use client"

import FormForModification from "../modification/formForModification";
import InputElement from "../input/inputElement";
import React from "react";

export default function PasswordModificationForm() {
    // todo handleSubmit 인자에 적절한 메서드(요청 전송 로직) 추가 (emailAddressModificationForm 참고)
    function handlePwModification(event) {
        event.preventDefault()
    }
    return (
        <FormForModification handleSubmit={handlePwModification}>
            <div className={"w-full h-[260px] sm:border-2 border-slate-200"}>
                <div className={"w-full h-full grid content-center"}>
                    <div className={"w-full h-fit"}>
                        <InputElement type={"password"} value={undefined} custom={"m-3"} placeholder={"새 비밀번호"}/>
                    </div>
                    <div className={"w-full h-fit"}>
                        <InputElement type={"password"} value={undefined} custom={"m-3"} placeholder={"확인"}/>
                    </div>
                    <div className={"w-full h-fit"}>
                        <InputElement type={"submit"} placeholder={""}
                                      custom={"border-2 border-white rounded m-4"} value={"비밀번호 변경"}/>
                    </div>
                </div>
            </div>
        </FormForModification>
    )
}