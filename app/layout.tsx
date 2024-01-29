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
    // 현재는 목 데이터를 만들어 놓았으나 api를 통하여 실제 데이터를 가져올 시 형식에 맞게끔 수정 필요
    const navLinks = [
        { id: 1, list: "1-1", href: ""},
        { id: 2, list: "3-4", href: ""},
        { id: 3, list: "3-2", href: ""}
    ]

    const NavStyle = {
        Root: {
            fontSize: "30px",
            fontWeight: "bold",
        },
        Buttons: "inline-block leading-none"

    }

    return (
        <html lang="en">
        <body>
        <div className={"grid justify-items-center"}>
            <div className={"p-[5px]"}>
                <div className={"w-full grid grid-cols-5"}>
                    <div className={"text-black col-span-1 grid justify-items-center"}>
                        <Link href="/" style={NavStyle.Root}>
                            Tech blog
                        </Link>
                    </div>
                    <div className={"col-span-3 flex p-[3px], pl-[10px]"}>
                        {navLinks.map((each) => (
                            <LayoutButton key={each.id} customClass={NavStyle.Buttons}
                                          href={each.href}>{each.list}</LayoutButton>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        {children}
        <div>
            this page was made for recording my learning and leaving which is known to myself
        </div>
        </body>
        </html>
    )
}