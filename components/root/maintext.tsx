"use client"

import {useEffect} from "react";

export default function maintext() {
    const AnimatedText: string = "본 블로그에 배움을 기록하는 것이 하루하루마다 지켜볼 때는 비록 새싹이 언제 자라나는지 뚫어저라 지켜보는 느낌일지도";

    // typeWriter(AnimatedText, 0, document.getElementById("AnimatedElement"))
    // css 애니메이션, 자바스크립트를 사용하여 루트 페이지 디자인하기
    const typeWriter = (text: string, index: number, element: HTMLElement)=> {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            // 60ms 마다 typeWriter 함수를 재귀적으로 호출
            setTimeout(function() {
                typeWriter(text, index, element);
            }, 60);
        }
    }

    return (
        <div className={"h-full w-full text-4xl p-[10px] absolute top-[100px]"}>
            <p id={"AnimatedElement"}></p>
        </div>
    )
}