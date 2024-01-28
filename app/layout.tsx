import React from "react";
import "./globals.css"
import LayoutButton from "../components/layout/layoutButton"
import Link from "next/link";

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}


export default function RootLayout({
    children
    }: {
    children: React.ReactNode
}) {
    const ButtonClass : string = "ddr";
    // 현재는 목 데이터를 만들어 놓았으나 api를 통하여 실제 데이터를 가져올 시 형식에 맞게끔 수정 필요
    const navLinks = [
        { id: 1, list: "1-1", href: ""},
        { id: 2, list: "3-4", href: ""}
    ]
    return (
        <html lang="en">
        <body>
        <div>
            <nav id={"rootNav"}>
                <div className={"flex h-14 justify-center"}>
                    <h1 className={"bg-blue-400 max-w-40 "}>
                        <Link href="/">
                            Tech blog
                        </Link>
                    </h1>
                    <ul id={"rootNav-list"}>
                        <li>
                            {navLinks.map((each) => (
                                <LayoutButton key={each.id} customClass={ButtonClass} href={each.href}>{each.list}</LayoutButton>
                            ))}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        {children}
        <div>
            this page was made for recording my learning and leaving which is known to myself
        </div>
        </body>
        </html>
    )
}