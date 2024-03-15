import {RegisterOptions, UseFormRegister} from "react-hook-form";
import React from "react";

export default function MainContentArea({
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