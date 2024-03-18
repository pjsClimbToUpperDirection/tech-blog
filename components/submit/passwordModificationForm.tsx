"use client"

import FormForModification from "../modification/formForModification";
import InputElement from "../input/inputElement";
import React, {useEffect, useState} from "react";
import InputElementWithVar from "../../components/input/inputElementWithVar"
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import TokenStore from "../../tokenStorage/redux/store";
import {useRouter} from "next/navigation";

interface passwordModificationForm {
    newPassword: string,
    repeat: string
}

// todo 유효성 검증 구현 완료됨, 이후 필요한 로직 구현(요청, 응답, 리디렉션)
export default function PasswordModificationForm({
    url,
    method,
    }:{
    url: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
    }) {
    let password: string;
    const {
        register,
        handleSubmit,
        watch
    } = useForm<passwordModificationForm>();

    const router = useRouter();

    const onSubmit: SubmitHandler<passwordModificationForm> = async (data: passwordModificationForm) =>  {
        let response= await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                "Authorization": TokenStore.getState().value,
                "refresh": sessionStorage.getItem("RefreshToken"),
                "Authorization_Modification_PW": sessionStorage.getItem("ForRe_Verification")
            },
            body: JSON.stringify({
                "password": data.repeat
            }),
        })
        if (response.status == 200) {
             sessionStorage.removeItem("ForRe_Verification")
             router.replace("/logout")
        } else if (response.status == 401) {
            setCustomOfNewPassword("권한을 갖고있지 않음")
            setCustomOfRepeat("문제가 계속될시 인증 과정부터 재시도")
        } else {
            setCustomOfRepeat("문제가 계속될시 인증 과정부터 재시도")
        }
    }

    const onError: SubmitErrorHandler<passwordModificationForm> = (error: FieldErrors<passwordModificationForm>) => {
        // 유효성 검증 과정에서 문제가 식별되었을 시 작동
        setCustomOfNewPassword("")
        setCustomOfRepeat("")
        switch (true) {
            case error.newPassword != undefined: {
                setCustomOfNewPassword(error.newPassword.message)
                break
            }
            case error.repeat != undefined: {
                setCustomOfRepeat(error.repeat.message)
                break
            }
        }
    }

    const [ customOfNewPassword, setCustomOfNewPassword ] = useState("");
    const [ customOfRepeat, setCustomOfRepeat ] = useState("");

    password = watch("newPassword")

    useEffect(() => { // 새로고침 혹은 뒤로가기 등으로 인한 unload 동작 촉발시 작동
        window.addEventListener("beforeunload", () => {
            sessionStorage.removeItem("ForRe_Verification") // 새로고침 시 재인증 필요
            router.push("/") // 기존 재차 인증 페이지로 돌아감
        })
    }, []);

    return (
        <FormForModification handleSubmit={handleSubmit(onSubmit, onError)}>
            <div className={"w-full h-[300px] sm:border-2 border-slate-200"}>
                <div className={"w-full h-full grid grid-rows-5 content-center px-[30px]"}>
                    <div className={"w-full h-full row-start-2 row-span-3 grid grid-rows-3"}>
                        <div className={"w-full h-full row-span-1"}>
                            <InputElementWithVar type={"password"}
                                                 value={undefined}
                                                 placeholder={"새 비밀번호"}
                                                 id={"newPassword"}
                                                 alias={"newPassword"}
                                                 message={customOfNewPassword}
                                                 register={register}
                                                 options={{
                                                     required: "비밀번호를 입력하여 암호 수정 절차 진행",
                                                     minLength: {
                                                         value: 3,
                                                         message: "3자 이상 입력"
                                                     },
                                                     maxLength: {
                                                         value: 30,
                                                         message: "30자 이하로 입력"
                                                     },
                                                 }}/>
                        </div>
                        <div className={"w-full h-full row-span-1"}>
                            <InputElementWithVar type={"password"}
                                                 value={undefined}
                                                 placeholder={"확인"}
                                                 id={"repeat"}
                                                 alias={"repeat"}
                                                 message={customOfRepeat}
                                                 register={register}
                                                 options={{
                                                     required: "비밀번호 재차 입력이 요구됨",
                                                     validate: value => password == value || "초기 입력 비밀번호와 같지 않음"
                                                 }}/>
                        </div>
                        <div className={"w-full h-full row-span-1"}>
                            <InputElement type={"submit"} placeholder={""}
                                          custom={"border-2 border-white rounded"} value={"비밀번호 변경"}/>
                        </div>
                    </div>
                </div>
            </div>
        </FormForModification>
    )
}