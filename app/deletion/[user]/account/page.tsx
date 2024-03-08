import RequestGenerator from "../../../../components/button/requestGenerator";
import React from "react";

export default function AccountDeletionPage({
    params
    }:{
    params: { user: string }
    }) {
    let url = "http://localhost:1701/api/v1/account-api/deletion/verification"
    // todo 계정 삭제 시 요청 헤더 내부에 로그인 시 발급받은 jwt, 비밀번호 재입력을 통해 받은 임시 토큰을 헤더에 담아 보낸다 (본문은 비어있음)
    return (
        <div className={"w-full h-screen min-h-[1100px]"}>
            <div className={"grid justify-items-center h-full text-slate-200"}>
                <div
                    className={"w-full sm:w-[540px] bg-black h-[590px] sm:h-[560px] z-20  absolute top-[70px] sm:top-[130px]  grid grid-rows-7 rounded px-[40px]  sm:border-2 border-slate-100"}>
                    <div className={"row-span-1 grid content-center"}>
                        <div className={"w-full border-b-2"}>
                            <p>계정 삭제 요청에 관한 양식</p>
                        </div>
                    </div>
                    <div className={"row-span-2"}>
                        <p>계정 삭제 시 본인의 게시글, 계정 관련 모든 정보(이메일 등) 는(은) 영구히 삭제되며 요청이 전송될 시 이를 무효화 할 수 없습니다. 요청을 보내기 전 다시 한번
                            숙고하십시요.</p>
                        <div className={"my-2"}>
                            <p className={"inline"}>삭제 대상 계정의 사용자 이름 : </p><p
                            className={"inline text-blue-200"}>{params.user}</p>
                        </div>
                    </div>
                    <div className={"row-start-7"}>
                        <RequestGenerator url={url} method={"DELETE"} buttonText={"눌러서 계정 삭제 요청 전송"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}