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

    window.addEventListener("scroll", () => {
        console.log("ddd")
    })

    return (
        <html lang="en" className={"h-[100%]"}>
        <body className={"h-[100%]"}>
        <div id={"rootPage"} className={"flex flex-col h-[100%]"}>
            <div className={"grid justify-items-center grid-cols-7 bg-slate-100 border-black sticky top-0"}>
                <div className={"p-[5px] w-full col-start-2 col-end-7"}>
                    <div className={"w-full grid grid-cols-5"}>
                        <div className={"text-black col-span-2 grid justify-items-center p-[5px]"}>
                            <Link href="/" className={"text-[30px] font-bold"}>
                                Tech blog
                            </Link>
                        </div>
                        <div className={"col-span-3 p-[5px]"}>
                            <div className={"px-[50px] py-[10px]"}>
                                <ul className={"flex flex-row-reverse justify-start"}>
                                    {navLinks.map((each) => (
                                        <LayoutButton key={each.id} customClass={"p-[2px] px-[10px] min-w-[42px]"}
                                                      href={each.href}>{each.list}</LayoutButton>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex-[1_0_100%]"}>
                {children}
            </div>
            <div className={"border-t-[1px] border-black min-h-[100px] p-[9px] "}>
                <div>

                </div>
            </div>
        </div>
        </body>
        </html>
    )
}