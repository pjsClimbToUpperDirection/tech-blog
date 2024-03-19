"use client"

import React, {useEffect, useState} from "react";
import InputElementForDisplay from "../../input/inputElementForDisplay";
import Full_height_Form from "../../modification/full_height_Form";
import TokenStore from "../../../tokenStorage/redux/store";
import MainContentArea from "./content/mainContentArea";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {redirect, useRouter} from "next/navigation";

interface PostModificationFormInput {
    content: string
}

export default function PostModificationForm({
    writer,
    title,
    modificationUrl
    }:{
    writer: string,
    title: string,
    modificationUrl: string
}) {
    const {
        register,
        handleSubmit
    } = useForm<PostModificationFormInput>();

    const router = useRouter();

    const onSubmit: SubmitHandler<PostModificationFormInput> = async (data: PostModificationFormInput) => {
        let response= await fetch(modificationUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": TokenStore.getState().value,
                "refresh": sessionStorage.getItem("RefreshToken")
            },
            body: JSON.stringify({
                title: title,
                content: data.content
            }),
        })
        if (response.status == 200) {
            router.push(`/${writer}/main/1`) // 게시글 목록 페이지로 이동
        } else {
            setCustomOfContent("문제 지속될 시 재 로그인")
        }
    }

    const onError: SubmitErrorHandler<PostModificationFormInput> = (error: FieldErrors<PostModificationFormInput>) => {
        setCustomOfContent("")
        switch (true) {
            case error.content != undefined: {
                setCustomOfContent(error.content.message)
                break
            }
        }
    }

    const [ customOfContent, setCustomOfContent ] = useState("");

    return (
        <Full_height_Form handleSubmit={handleSubmit(onSubmit, onError)}>
            <div className={"sm:border-x-2 border-t-2 border-slate-300 w-full h-[100px]"}>
                <div className={"border-b-2 border-dashed w-full h-full flex flex-col"}>
                    <div className={"w-full h-full flex-1 grid content-center"}>
                        <div className={"w-full h-fit"}>
                            <InputElementForDisplay displayedValue={title} alertWithFog={undefined} custom={"m-3 titleForModification"}/>
                        </div>
                    </div>
                    <div className={"w-full h-fit text-white grid justify-items-center"}>
                        ---------절취선---------
                    </div>
                </div>
            </div>
            <div className={"sm:border-x-2 border-slate-300 w-full flex-1 z-10 my-2"}>
                <div className={"border-y-2 border-dashed border-slate-300 w-full h-full p-3"}>
                    <MainContentArea
                        placeholder={"이곳에 내용 작성"}
                        value={undefined}
                        id={"id_mainContent"}
                        register={register}
                        alias={"content"}
                        options={{
                            required: "본문 내용을 입력하여 양식 구성",
                            minLength: {
                                value: 5,
                                message: "5자 이상 입력"
                            },
                            maxLength: {
                                value: 3004,
                                message: '3004자 이하로 입력'
                            }
                        }}
                        message={customOfContent}/>
                </div>
            </div>
            <div className={"sm:border-x-2 border-b-2 border-slate-300 w-full h-[100px]"}>
                <div className={"w-full h-full border-t-2 border-dashed border-slate-300"}>
                    <div className={"w-full h-fit text-white grid justify-items-center"}>
                        ---------절취선---------
                    </div>
                    <div className={"text-orange-500 w-full h-fit"}>
                        <input type={"submit"} value={"눌러서 기존 게시글 수정"}
                               className={"w-full h-fit my-4"}/>
                    </div>
                </div>
            </div>
        </Full_height_Form>
    )
}