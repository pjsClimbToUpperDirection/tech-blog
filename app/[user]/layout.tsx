import React from "react";
import "../../components/globals.css"
import LayoutHeader from "../../components/layout/layoutHeader";
import MenuBar from "../../components/layout/menuBar"

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}
// todo 해당 ssr 컴포넌트에서 경로 파라미터를 통해 브라우저에서의 요청 url 노출 없이 사용자 정보를 가져올수 있음
// todo 401 응답 받을 경우 인증되지 않은 사용자가 해당 사용자 이름으로 동적 라우트를 통한 페이지 요청을 시도하는 것이라 간주
export default function UserLayout({
    children,
    params
    }: {
    children: React.ReactNode,
    params: { user: string }
}) {
    const commonId1 = "commonId1"
    return (
        <>
            <div className={"w-full h-[2240px]"}>
                <LayoutHeader user={params.user} externalId={commonId1}/>
                <MenuBar rootId={commonId1} user={params.user}/>
                {children}
            </div>
        </>
    )
}