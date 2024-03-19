"use client"

import Full_height_Form from "../../modification/full_height_Form";
import React, {useEffect, useState} from "react";
import InputElementWithVar from "../../input/inputElementWithVar";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import TokenStore from "../../../tokenStorage/redux/store";
import MainContentArea from "./content/mainContentArea";
import {useRouter} from "next/navigation";

// todo 추후 postModificationForm 과 공통된 요소 통합하려 시도
interface PostCreationFormInput {
    title: string,
    content: string
}
export default function PostCreationForm({
    postCreationUrl,
    writer
    }:{
    postCreationUrl: string,
    writer: string
}) {
    useEffect(() => {
        if (TokenStore.getState().value == undefined || sessionStorage.getItem("RefreshToken") == null) {
            router.push("/signin") // 인증 관련 요소가 부재할 시 재 로그인 필요
        }
    }, []);

    const {
        register,
        handleSubmit
    } = useForm<PostCreationFormInput>();

    const router = useRouter();

    const onSubmit: SubmitHandler<PostCreationFormInput> = async (data: PostCreationFormInput) => {
        let response= await fetch(postCreationUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": TokenStore.getState().value,
                "refresh": sessionStorage.getItem("RefreshToken")
            },
            body: JSON.stringify({
                title: data.title,
                content: data.content
            }),
        })
        if (response.status == 201) {
            router.replace("/" + writer + "/main/1") // 게시글 목록 페이지로 이동
        } else if (response.status == 401) {
            router.push("/signin")
        }
    }

    const onError: SubmitErrorHandler<PostCreationFormInput> = (error: FieldErrors<PostCreationFormInput>) => {
        setCustomOfTitle("");
        setCustomOfContent("")
        switch (true) {
            case error.title != undefined: {
                setCustomOfTitle(error.title.message)
                break
            }
            case error.content != undefined: {
                setCustomOfContent(error.content.message)
                break
            }
        }
    }

    const [ customOfTitle, setCustomOfTitle ] = useState("");
    const [ customOfContent, setCustomOfContent ] = useState("");


    return (
        <Full_height_Form handleSubmit={handleSubmit(onSubmit, onError)}>
            <div className={"sm:border-x-2 border-t-2 border-slate-300 w-full h-[100px]"}>
                <div className={"border-b-2 border-dashed w-full h-full flex flex-col"}>
                    <div className={"w-full h-full flex-1 grid content-center"}>
                        <div className={"w-full h-fit p-3"}>
                            <InputElementWithVar type={"text"}
                                                 placeholder={"제목 입력"}
                                                 value={undefined}
                                                 id={"id_title"}
                                                 alias={"title"}
                                                 message={customOfTitle}
                                                 register={register}
                                                 options={{
                                                     required: "게시글 제목을 입력하여 양식 구성",
                                                     minLength: {
                                                         value: 3,
                                                         message: "3자 이상 입력"
                                                     },
                                                     maxLength: {
                                                         value: 30,
                                                         message: '30자 이하로 입력'
                                                     }
                                                 }}/>
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
                                value: 50,
                                message: "50자 이상 입력"
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
                        <input type={"submit"} value={"눌러서 게시글을 업로드"}
                               className={"w-full h-fit my-4"}/>
                    </div>
                </div>
            </div>
        </Full_height_Form>
    )
}