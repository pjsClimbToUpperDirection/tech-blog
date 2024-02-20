"use client"

import React, {useEffect} from "react";
import Link from "next/link";

export default function layoutFooter() {

    // 컴포넌트가 DOM 에 추가되었을 때 setup 함수(첫번째 인자) 작동
    useEffect(() => {
        function variableInnerText( width: number ) {
            if (width < 768) {
                document.getElementById("text").innerText = "";
                document.getElementById("link").innerText = "클릭하여 마저 탐색하기..."
            } else {
                document.getElementById("text").innerText = "본 게시글은 개발자 본인이 배운 내용을 기록하여 본인의 역량 발전에 기여하고자 작성하는 글입니다.";
                document.getElementById("link").innerText = "마저 탐색하기..."
            }
        }

        variableInnerText(window.innerWidth)
        window.addEventListener("scroll", () => {
            // 스크롤 위치
            const scrollY = window.scrollY || window.document.documentElement.scrollTop;
            // 현재 사용자에게 보이는 브라우저 창(스크롤되어 혹은 기본 상태에서 보이는 전체 내용의 일부)의 높이
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            // 문서의 전체적인 높이
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
            if (scrollY + windowHeight + 5 >= documentHeight){
                window.document.getElementById("footerRoot").style.opacity = "1";
            } else {
                window.document.getElementById("footerRoot").style.opacity = "0.5";
            }
        })
        window.addEventListener("resize", () => {
            variableInnerText(window.innerWidth)
        })
    }, []);
    return (
        <div className={"w-full grid justify-items-center bg-black border-black bottom-0 fixed opacity-50 min-h-[50px] md:min-h-[70px] z-30"}
             id={"footerRoot"}>
            <div className={"text-gray-200 grid content-center grid-rows-1 p-[5px] h-fit"}>
                <span id={"text"}></span> <Link id={"link"} href={"https://nextjs.org/"} className={"text-blue-200 h-full"}></Link>
            </div>
        </div>
    )
}