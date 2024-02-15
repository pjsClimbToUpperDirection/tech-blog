import React from "react";
import "../../components/globals.css"
import LayoutHeader from "../../components/layout/layoutHeader";
import LayoutFooter from "../../components/layout/layoutFooter";

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}

export default function UserLayout({
    children,
    params
    }: {
    children: React.ReactNode,
    params: { user: string }
}) {
    // 로그아웃 시 토큰 만료를 위해 필요한 요청을 포함하도록 구성할 필요
    const navLinks = [
        { id: 1, list: "sign-out", href: "/"},
        { id: 2, list: "post-New", href: ""},
    ]

    return (
        <div id={"rootPage"} className={"w-full h-[1200px] flex flex-col flex-auto"}>
            <LayoutHeader navLinks={navLinks} user={params.user}/>
            <div className={"flex-auto"}>
                {children}
            </div>
            <LayoutFooter/>
        </div>
    )
}