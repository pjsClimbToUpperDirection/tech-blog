"use client"

import React, {useEffect} from "react";
import Link from "next/link";

// 두 인자를 통해 들어오는 변수는 typing 함수의 중복 실행을 방지하고자 숫자를 통해 상태를 저장한다, 컴포넌트에 독립적인 상태를 유지하고자 상위 컴포넌트에서 선언 후 인자로 값을 받음
export default function layoutFooter({ latch, previousY } : { latch: number, previousY: number }) {

    // 컴포넌트가 DOM 에 추가되었을 때 setup 함수(첫번째 인자) 작동
    useEffect(() => {
        const textArea = document.getElementById("text");
        const linkArea = document.getElementById("link");

        let text1: string;
        let text2: string;

        let index1 = 0;
        let index2 = 0;

        function variableInnerText(width: number) {
            if (width < 768) {
                text1 = "";
                text2 = "클릭하여 마저 탐색하기..."
            } else {
                text1 = "본 게시글은 개발자 본인이 배운 내용을 기록하여 본인의 역량 발전에 기여하고자 작성하는 글입니다.";
                text2 = "마저 탐색하기..."
            }
        }
        function typing(scY: number) {
            if (scY > previousY + 4) {
                if (latch == 0) {
                    latch = 1;
                    return;
                }
                requestAnimationFrame(() => {
                    latch = 0;
                    if (index1 != text1.length) {
                        textArea.textContent += text1[index1]
                        index1++
                        previousY = scY;
                    }
                    else {
                        if (index2 != text2.length) {
                            linkArea.textContent += text2[index2]
                            index2++
                            previousY = scY;
                        }
                    }
                })
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
            if (scrollY < 5) {
                previousY = 0;
            }
            typing(scrollY)
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