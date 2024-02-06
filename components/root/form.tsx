"use client"

import React, {useEffect} from "react";
import SignInForm from '../../components/form/signinForm'

export default function Form() {
    // 컴포넌트의 기본 스타일 이외에 추가하고자 하는 tailwind 속성 작성
    const rootProps = "opacity-90"

    useEffect(() => {
        window.addEventListener("click", () => {
            document.getElementById("signInForm").style.zIndex = "20";
        })
    }, []);
    return (
        <>
            <SignInForm rootElement={rootProps}/>
        </>
    )
}