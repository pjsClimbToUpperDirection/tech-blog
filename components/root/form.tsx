"use client"

import React, {useEffect} from "react";
import SigninForm from '../../components/form/signinForm'

export default function form() {
    let displayed = 0;
    useEffect(() => {
        window.addEventListener("click", () => {
            document.getElementById("Form").style.zIndex = "20";
        })
    }, []);
    return (
        <>
            <div id={"Form"} className={"min-h-[1000px] h-full w-full grid grid-cols-4 grid-rows-7 bg-amber-100 p-[10px] opacity-40 absolute"}>
                <SigninForm/>
            </div>
        </>
    )
}