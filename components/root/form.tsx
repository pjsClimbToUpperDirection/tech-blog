"use client"

import React from "react";
import SigninForm from '../../components/form/signinForm'

export default function form() {


    return (
        <>
            <div id={"Form"} className={"min-h-[1000px] h-full w-full grid grid-cols-4 grid-rows-7 bg-amber-100 p-[10px] z-10 opacity-40 absolute"}>
                <SigninForm/>
            </div>
        </>
    )
}