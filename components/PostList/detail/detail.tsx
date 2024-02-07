"use client"

import {useEffect} from "react";

export default function Detail({
    postInfo
    }: {
    postInfo : { id: number, writer: string, email: string, title: string, "content": string, "created_date": string, "updated_date": string | null}}) {
    let done = 0;
    useEffect(() => {
        if (done == 0){
            console.log(postInfo.content.length)
            if (postInfo.content.length >= 5) {
                // 사용자 입력을 받는 영역에서 innerHTML 사용은 xss 공격에 유의해야 한다
                document.getElementById("container").innerHTML = "<p>100자 이상 ....</p>"
            } else
                document.getElementById("container").innerText = "ddr"
        }
        done = 1
    }, []);
    return (
        <div className={"col-span-1 p-[5px] my-[5px] grid grid-rows-5 border-[5px] border-blue-200 rounded-3xl h-[200px]"}>
            <h2 className={"row-span-1 grid items-center justify-items-center m-[2px] border-[4px] border-blue-200 rounded-3xl"}>
                {postInfo.title}
            </h2>
            <div className={"row-span-4 grid grid-cols-3"}>
                <div className={"col-span-1 grid grid-rows-3"}>
                    <div className={"row-span-1 mx-2 my-auto"}>
                        <span>저자 :</span>
                        <span>{postInfo.writer}</span>
                    </div>
                    <div className={"row-span-1 mx-2 my-auto"}>
                        <span>생성일자: </span>
                        <span>{postInfo.created_date}</span>
                    </div>
                    <div className={"row-span-1 mx-2 my-auto"}>
                        <span>최종 수정일: </span>
                        <span>{postInfo.updated_date}</span>
                    </div>
                </div>
                <div id={"container"} className={"col-span-2 overflow-hidden"}>
                </div>
            </div>
        </div>
    )
}