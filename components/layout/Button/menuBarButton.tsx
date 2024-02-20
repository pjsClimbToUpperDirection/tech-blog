"use client"

import {useEffect} from "react";
import Link from "next/link";

export default function menuBarButton({
    title,
    href
    } : {
    title: string
    href: string
    }) {
    function close() {
        const menuBar = document.getElementById("menuBar");
        menuBar.style.zIndex = "0"
    }
    return (
        <div className={"w-full h-[40px] border-b-2 border-gray-600 grid content-center"}>
            <Link href={href} className={"text-white pl-[22px]"} onClick={close}>{title}</Link>
        </div>
    )
}