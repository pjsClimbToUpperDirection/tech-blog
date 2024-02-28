"use client"

import InputElement from "../inputElement";
import React, {useEffect, useState} from "react";
import {number} from "prop-types";

// latch 정의 시 클릭에 의한 테두리 활성화 상태
// 미 정의시 reactiveContainer 내에서 focus 이벤트 트리거함으로써 테두리 활성화 가능
// 한 페이지에서 여러번 사용 시 중복 id 발생 가능성!!
export default function ReactiveInputElement({
    latch,
    placeholder,
    type,
    triggered
    } : {
    latch : number | undefined,
    placeholder: string | undefined,
    type: string,
    triggered: number | undefined
    }) {
    const [trigger, setTrigger] = useState(0)
    useEffect(() => {
        const reactiveComponent = document.getElementById("reactiveComponent")
        const reactiveContainer = document.getElementById("reactiveContainer");
        if (latch != undefined) {
            reactiveComponent.addEventListener("click", () => {
                if (latch == 0) {
                    latch = 1;
                    reactiveContainer.style.borderWidth = "2px"
                    reactiveContainer.style.borderColor = "white"
                } else {
                    latch = 0;
                    reactiveContainer.style.borderWidth = "0"
                }
            })
        } else {
            if (trigger == 1) {
                reactiveContainer.style.borderWidth = "2px"
                reactiveContainer.style.borderColor = "white"
            }
        }
    }, []);
    return (
        <div className={"w-full h-full p-2"}>
            <div id={"reactiveContainer"} className={"w-full h-full"}>
                <InputElement id={"reactiveComponent"} type={type} value={undefined} custom={"m-3"}
                              placeholder={placeholder}/>
            </div>
        </div>
    )
}