"use client"

import Link from "next/link";
import React, {useEffect} from "react";
import NavBar from "../button/navBar"
import "../headerBar.css"
import close from "./close";

export default function layoutHeader({
    user
    }: {
    user: string
})  {
    // 컴포넌트가 DOM 에 추가되었을 때 setup 함수(첫번째 인자) 작동
    useEffect(() => {
        const headerBar = document.getElementById("headerBar");
        const headerRoot = document.getElementById("headerRoot");
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY || window.document.documentElement.scrollTop;
            if (scrollY > 10){
                if (window.innerWidth > 1023) {
                    headerBar.id = "yieldForLarge"
                } else if (window.innerWidth > 639) {
                    headerBar.id = "yieldForSmall"
                } else {
                    headerBar.id = "mergeForMini"
                }
                headerRoot.style.opacity = "0.5"
            } else {
                if (window.innerWidth > 1023) {
                    headerBar.id = "mergeForLarge"
                } else if (window.innerWidth > 639) {
                    headerBar.id = "mergeForSmall"
                } else {
                    headerBar.id = "yieldForMini"
                }
                headerRoot.style.opacity = "1"
            }
        })
    }, []);
    return (
        <>
            <div id={"headerRoot"}
                className={"w-full flex justify-center bg-black border-black fixed top-0 h-[70px] content-center text-gray-200 z-30"}>
                <div id={"headerBar"} className={"p-[5px] w-full max-sm:w-[100%] h-fit py-[5px]  sm:w-[450px] lg:w-[550px]"}>
                    <div className={"w-full h-[70px] flex justify-between"}>
                        <div className={"w-[100px] p-[5px] flex justify-center"}>
                            <Link href={`/${user}/1`} className={"text-[30px] font-bold"} onClick={close}>
                                {user}
                            </Link>
                        </div>
                        <div
                            className={"w-[80px] p-[5px] grid justify-center content-center"}>
                            <NavBar/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

/*
* <div className={"col-span-3 md:col-span-3 p-[5px]"}>
                        <div className={"md:px-[50px] py-[10px]"}>
                            <ul className={"flex flex-row-reverse justify-center md:justify-start"}>
                                {navLinks.map((each) => (
                                    <LayoutButton key={each.id} customClass={"p-[2px] px-[10px] min-w-[42px]"}
                                                  href={each.href}>{each.list}</LayoutButton>
                                ))}
                            </ul>
                        </div>
                    </div>*/