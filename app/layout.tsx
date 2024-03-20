import React from "react";
import "../components/globals.css"
import "../components/input.css"
import TokenContainer from "../tokenStorage/component/tokenContainer";

export const metadata = {
    title: 'first, it has been constructed',
    description: 'for my ability',
    robots: "noindex, nofollow" // 검색엔진에서 본인의 사이트가 노출되지 않도록 설정함
}

export default function RootLayout({
    children
    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={"bg-black"}>
            <TokenContainer/>
            {children}
            </body>
        </html>
    )
}