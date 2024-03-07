import React from "react";

export default function AccountDeletionFormLayout({
    children
    }:{
    children: React.ReactNode
}) {
    // todo 계정 삭제와 관련한 요청 로직 작성
    // todo 인증 토큰 (비밀번호 제차 확인을 통해 발급받은) 이 존재하지 않을 시 app/[user] 으로 리다이렉션
    return (
        <div className={"w-full h-screen min-h-[1100px]"}>
            {children}
        </div>
    )
}