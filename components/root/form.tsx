"use client"

import React, {useEffect} from "react";
import SigninForm from '../../components/form/signinForm'

export default function Form() {
    useEffect(() => {
        window.addEventListener("click", () => {
            document.getElementById("signinForm").style.zIndex = "20";

        })
    }, []);
    return (
        <>
            <SigninForm tailwindClassName={"opacity-70"}/>
        </>
    )
}