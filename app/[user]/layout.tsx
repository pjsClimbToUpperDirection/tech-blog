import React from "react";
import "../globals.css"
import LayoutHeader from "../../components/layout/layoutHeader";
import LayoutFooter from "../../components/layout/layoutFooter";

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}

export default function UserLayout({
    children
    }: {
    children: React.ReactNode
}) {
    // 현재는 목 데이터를 만들어 놓았으나 api 를 통하여 실제 데이터를 가져올 시 형식에 맞게끔 수정 필요
    const navLinks = [
        { id: 1, list: "sign-out", href: ""},
        { id: 2, list: "post-New", href: ""},
    ]

    return (
        <div id={"rootPage"} className={"flex flex-col h-[100%]"}>
            <LayoutHeader navLinks={navLinks} />
            <div className={"flex-[1_1_100%]"}>
                {children}
            </div>
            <LayoutFooter/>
        </div>
    )
}