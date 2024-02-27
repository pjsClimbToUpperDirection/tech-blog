"use client"

import React, {useEffect, useState} from "react";
import Link from "next/link";

// 두 인자를 통해 들어오는 변수는 typing 함수의 중복 실행을 방지하고자 숫자를 통해 상태를 저장한다, 컴포넌트에 독립적인 상태를 유지하고자 상위 컴포넌트에서 선언 후 인자로 값을 받음
export default function layoutFooter({ latch, previousY, pageNumber } : { latch: number, previousY: number, pageNumber: number }) {
    // 함수 하단 Link 컴포넌트는 state 가 변경됨에 따라 리 랜더링
    const [PlusOneUrl, setPlusOneUrl] = useState("");
    const [minusOneUrl, setMinusOneUrl] = useState("");


    let text1: string;
    let text2: string;
    let text3: string;

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    //function jumped() {
    //    previousY = 0;
    //    console.log("dd")
    //    variableInnerText(window.innerWidth)
    //}

    // 컴포넌트가 DOM 에 추가되었을 때 setup 함수(첫번째 인자) 작동
    useEffect(() => {
        // pageNumber 자체는 number 타입으로 지정하였으나, js 내부에서 문자열로 취급되는 문제로 인하여 이같이 처리
        let currentPage = pageNumber.toString();
        setPlusOneUrl(`http://localhost:3000/park/main/${parseInt(currentPage) + 1}`);
        setMinusOneUrl(`http://localhost:3000/park/main/${parseInt(currentPage) - 1}`);

        const textArea = document.getElementById("text");
        const link1Area = document.getElementById("link1") as HTMLAnchorElement;
        const link2Area = document.getElementById("link2") as HTMLAnchorElement;

        function typing(scY: number) {
            if (scY > previousY + 7) {
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
                            link1Area.textContent += text2[index2]
                            index2++
                            previousY = scY;
                        } else if (index3 != text3.length) {
                            link2Area.textContent += text3[index3];
                            index3++
                            previousY = scY;
                        }
                    }
                })
            }
        }

        function variableInnerText(width: number) {
            text2 = "다음 페이지로..."
            if (pageNumber > 1) {
                text3 = "아니면 이전 페이지?"
            } else {
                text3 = ""
            }
            if (width < 768) {
                text1 = "";
            } else {
                text1 = "본 게시글은 개발자 본인이 배운 내용을 기록하여 본인의 역량 발전에 기여하고자 작성하는 글입니다.";
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
    }, [pageNumber]);
    return (
        <div className={"w-full grid justify-items-center bg-black border-black bottom-0 fixed opacity-50 min-h-[50px] md:min-h-[70px] z-30"}
             id={"footerRoot"}>
            <div id={"Link"} className={"text-gray-200 grid content-center grid-rows-1 p-[5px] h-fit"}>
                <span id={"text"}></span>
                <Link id={"link1"} href={PlusOneUrl} className={"text-blue-200 h-full"}/>
                <Link id={"link2"} href={minusOneUrl} className={"text-blue-200 h-full"}/>
            </div>
        </div>
    )
}