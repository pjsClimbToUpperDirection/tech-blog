import React from "react";
import "../components/globals.css"
import "../components/input.css"

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}

export default function RootLayout({
    children
    }: {
    children: React.ReactNode
}) {
    // body 태그의 배경색을 slate-900으로 설정함으로서 끝단 스크롤 시 흰색 바탕 노출을 방지
    return (
        <html lang="en">
            <body className={"bg-black"}>
                {children}
            </body>
        </html>
    )
}