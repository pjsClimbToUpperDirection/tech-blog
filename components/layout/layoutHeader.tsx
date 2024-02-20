"use client"

import Link from "next/link";
import React, {useEffect} from "react";
import NavBar from "../button/navBar"

export default function layoutHeader({
    user
    }: {
    user: string
})  {
    // 컴포넌트가 DOM 에 추가되었을 때 setup 함수(첫번째 인자) 작동
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY || window.document.documentElement.scrollTop;
            if (scrollY > 10){
                window.document.getElementById("headerRoot").style.opacity = "0.5";
            } else {
                window.document.getElementById("headerRoot").style.opacity = "1";
            }
        })
    }, []);
    return (
        <>
            <div
                className={"w-full grid justify-items-center grid-cols-7 bg-black border-black fixed top-0 h-[70px] content-center text-gray-200"}
                id={"headerRoot"}>
                <div className={"p-[5px] w-full col-span-7 md:col-start-2 md:col-end-7"}>
                    <div className={"w-full h-[60px] md:h-[70px] grid grid-cols-4 md:grid-cols-5"}>
                        <div className={"grid justify-items-center p-[5px] col-span-2 md:col-span-1"}>
                            <Link href={`/${user}`} className={"text-[30px] font-bold"}>
                                {user}
                            </Link>
                        </div>
                        <div
                            className={"col-start-4  md:col-start-5  p-[5px] grid justify-items-center content-center max-sm:pr-[40px]"}>
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