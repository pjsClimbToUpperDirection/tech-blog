"use client"


import Link from "next/link";
import close from "../close";
export default function menuBarButton({
    title,
    href
    } : {
    title: string
    href: string
    }) {
    return (
        <div className={"w-full h-[40px] border-b-2 border-gray-600 grid content-center"}>
            <Link href={href} className={"text-white pl-[22px]"} onClick={close}>{title}</Link>
        </div>
    )
}