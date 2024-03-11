"use client"

import FormForModification from "../modification/formForModification";
import InputElement from "../input/inputElement";
import React, {useEffect, useState} from "react";
import InputElementWithVar from "../../components/input/inputElementWithVar"
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";

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


    const onSubmit: SubmitHandler<passwordModificationForm> = async (data: passwordModificationForm) =>  {
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
                "password": repeat
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
                                                         value: 15,
                                                         message: "15자 이상 입력"
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
                                                     required: "비밀번호 제차 입력이 요구됨",
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