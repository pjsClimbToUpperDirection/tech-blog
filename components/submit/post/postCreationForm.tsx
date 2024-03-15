"use client"

import Full_height_Form from "../../modification/full_height_Form";
import React, {useState} from "react";
import InputElementWithVar from "../../input/inputElementWithVar";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import store from "../../../tokenStorage/redux/store";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import {redirect} from "next/navigation";

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
    const {
        register,
        handleSubmit
    } = useForm<PostCreationFormInput>();

    const onSubmit: SubmitHandler<PostCreationFormInput> = async (data: PostCreationFormInput) => {
        console.log(data)
        let response= await fetch(postCreationUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().value,
                "refresh": sessionStorage.getItem("RefreshToken")
            },
            body: JSON.stringify({
                writer: writer,
                title: data.title,
                content: data.content
            }),
        })
        console.log(response)
        if (response.status == 201) {
            redirect("/" + writer + "/main/1") // 게시글 목록 페이지로 이동
        } else if (response.status == 401) {
            // todo 로그인 폼으로 이동, 이미 입력된 게시글은 일시 저장하는 로직 구현하기
        } else {
            // todo 로그인 폼으로 이동, 이미 입력된 게시글은 일시 저장하는 로직 구현하기
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
                                                     required: "게시글 제목을 입력하여 양식 작성 요청",
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
                            required: "본문 내용을 입력하여 양식 작성 요청",
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

function MainContentArea({
    placeholder,
    value,
    id,
    register,
    alias,
    options,
    message
    }:{
    placeholder: string,
    value: string | undefined,
    id: string,
    register: UseFormRegister<any>,
    alias: string
    options: RegisterOptions,
    message: string
}) {
    // register 메서드로 요소를 등록(register)
    // div 같은 컨테이너 태그 등으로 감싸는 식으로 크기, 위치를 조정할 것
    let custom: string;
    if (message.length > 1) {
        custom = "border-2 border-red-700"
    } else {
        custom = ""
    }
    return (
        <>
            <div className={"flex flex-col w-full h-full " + custom}>
                <textarea className={"grow w-full h-full bg-black text-gray-200 outline-0 resize-none"}
                       placeholder={placeholder}
                       value={value}
                       id={id}
                       {...register(alias, options)}/>
                <div className={"flex-none w-full h-[30px] text-red-600 px-[3px]"}><p>{message}</p></div>
            </div>
        </>
    )
}