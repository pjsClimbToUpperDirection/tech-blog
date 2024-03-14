"use client"

import React, {useEffect} from "react";
import InputElementForDisplay from "../../input/inputElementForDisplay";
import Full_height_Form from "../../modification/full_height_Form";

// todo displayedValue 값은 수정하고자 하는 기존 게시글 제목을 값으로 대입할수 있도록 할 것,
// todo 제목은 수정할 수 없으며 본문 수정 후 기존 제목과 함께 서버에 수정 요청
export default function PostModificationForm({ title }:{ title: string }) {
    // todo handleSubmit 인자에 적절한 메서드(요청 전송 로직) 추가
    let TitleContainer: HTMLInputElement;
    let contentArea: HTMLTextAreaElement;
    useEffect(() => {
        TitleContainer = document.getElementsByClassName("titleForModification")[0] as HTMLInputElement
        contentArea = document.getElementById("modifiedContent") as HTMLTextAreaElement
    }, []);
    function handlePostModification(event) {
        event.preventDefault()
        /*axios.patch("http://localhost:1701" + "/api/v1/patch-api/updatePost", {
            title: TitleContainer.value,
            content: contentArea.value
        })*/ // todo promise 객체를 반환하므로 .then() 을 사용하여 요청 후 수행할 로직 작성
    }

    return (
        <Full_height_Form handleSubmit={handlePostModification}>
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
                    <textarea className={"w-full h-full bg-black text-gray-200 outline-0 resize-none"} id={"modifiedContent"}/>
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