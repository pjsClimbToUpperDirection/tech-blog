"use client"

import React from "react";
import InputElement from "../input/inputElement";

export default function AccountDeletionForm({
    user,
    requestUrl,
    method
    }:{
    user: string,
    requestUrl: string
    method: "POST" | "GET" | "PATCH" | "DELETE",
}) {
    async function generateRequest(event) {
        event.preventDefault();
        console.log("delete")
        /*let response= await fetch(requestUrl, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                // 인증 토큰, 임시 토큰 담아서 요청
            },
            body: JSON.stringify({}),
        })
        console.log(response)
        if (response.ok) {
            alert("ok") // todo 성공 시 루트 페이지로 리다이렉션
        } else if (response.status == 401) {
            alert("nope") // todo 요청 토큰이 유효하지 않을 시 confirmation 이하 영역으로 이동, 암호 작성 및 토큰 발급 재진행
        } else {
            alert("other") // todo 기타 오류 대응 로직 구현
        } */
    }

    return (
        <div className={"w-full h-full relative text-gray-200"}>
            <div className={"w-full h-fit absolute sm:top-[40px] lg:top-[60px]"}>
                <div
                    className={"w-full bg-black h-[590px] sm:h-[560px] z-20  grid grid-rows-7 rounded px-[40px]  sm:border-2 border-slate-100"}>
                    <div className={"row-span-1 grid content-center"}>
                        <div className={"w-full border-b-2"}>
                            <p>계정 삭제 요청에 관한 양식</p>
                        </div>
                    </div>
                    <div className={"row-span-2"}>
                        <p>
                            계정 삭제 시 본인의 게시글, 계정 관련 모든 정보(이메일 등) 는(은) 영구히 삭제되며 요청이 전송될 시 이를 무효화 할 수 없습니다.
                            요청을 보내기 전 다시 한번 숙고하십시요.
                        </p>
                        <div className={"my-2"}>
                            <p className={"inline"}>삭제 대상 계정의 사용자 이름 : </p><p
                            className={"inline text-blue-200"}>{user}</p>
                        </div>
                    </div>
                    <div className={"row-start-7"}>
                        <form onSubmit={generateRequest}>
                            <InputElement placeholder={undefined} type={"submit"}
                                          custom={"w-full border-2 border-rose-500 rounded"}
                                          value={"눌러서 삭제 요청 전송"}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}