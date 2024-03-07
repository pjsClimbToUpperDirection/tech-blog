import React from "react";

export default function ConfirmationLayout({
    children
    }:{
    children: React.ReactNode
    }) {
    // todo Route Handlers 사용하여 백앤드로 요청을 전송할 시 경로 노출을 피하기
    return (
        <div className={"w-full h-screen min-h-[900px]"}>
            {children}
        </div>
    )
}