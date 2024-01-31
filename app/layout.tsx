import React from "react";
import "./globals.css"
import LayoutHeader from "../components/layout/layoutHeader";
import LayoutFooter from "../components/layout/layoutFooter";

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}

export default function RootLayout({
    children
    }: {
    children: React.ReactNode
}) {
    // 현재는 목 데이터를 만들어 놓았으나 api를 통하여 실제 데이터를 가져올 시 형식에 맞게끔 수정 필요
    const navLinks = [
        { id: 1, list: "1-1", href: ""},
        { id: 2, list: "3-4", href: ""},
        { id: 3, list: "3-2", href: ""}
    ]


    return (
        <html lang="en" className={"h-[100%]"}>
        <body className={"h-[100%]"}>
        <div id={"rootPage"} className={"flex flex-col h-[100%]"}>
            <LayoutHeader navLinks={navLinks}/>
            <div className={"flex-[1_0_100%]"}>
                {children}
            </div>
            <LayoutFooter/>
        </div>
        </body>
        </html>
    )
}