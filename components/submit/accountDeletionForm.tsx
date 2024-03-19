"use client"

import React from "react";
import InputElement from "../input/inputElement";
import TokenStore from "../../tokenStorage/redux/store";
import {useRouter} from "next/navigation";

export default function AccountDeletionForm({
    user,
    requestUrl
    }:{
    user: string,
    requestUrl: string
}) {
    const router = useRouter();

    async function generateRequest(e) {
        e.preventDefault();
        if (window.confirm("계정 삭제를 요청하시겠습니까? 이 동작은 취소할 수 없습니다.")) {
            let response= await fetch(requestUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": TokenStore.getState().value,
                    "refresh": sessionStorage.getItem("RefreshToken"),
                    "Authorization_Deletion_AC": sessionStorage.getItem("ForRe_Verification")
                }
            })
            if (response.status == 200) {
                router.replace("/logout");
            } else if (response.status == 401) { // 토큰 만료 (여기서는 임시 토큰)
                router.back(); // 재인증 페이지로 되돌아감
            }
        }
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