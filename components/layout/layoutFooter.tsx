"use client"

import React, {useEffect} from "react";

export default function layoutFooter() {

    // 컴포넌트가 DOM 에 추가되었을 때 setup 함수(첫번째 인자) 작동
    useEffect(() => {
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
    }, []);
    return (
        <div className={"grid justify-items-center grid-cols-7 bg-slate-100 border-black bottom-0 sticky h-[70px]"} id={"footerRoot"}>
            <div className={"p-[5px] w-full col-start-2 col-end-7"}>
                <div className={"w-full grid grid-cols-5"}>

                </div>
            </div>
        </div>
    )
}