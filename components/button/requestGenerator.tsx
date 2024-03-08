"use client"

import InputElement from "../input/inputElement";
import React from "react";

export default function RequestGenerator({
    url,
    method,
    buttonText
    }:{
    url: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
    buttonText: string
}) {
    async function generateRequest(event) {
        event.preventDefault();
        let response= await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                // 인증 토큰, 임시 토큰 담아서 요청
            },
            body: JSON.stringify({}),
        })
        console.log(response)
        if (response.ok) {
            alert("ok")
        } else if (response.status == 401) {
            alert("nope")
        } else {
            alert("other")
        }
    }
    return (
        <form onSubmit={generateRequest}>
            <InputElement placeholder={undefined} type={"submit"} custom={"w-full border-2 border-white rounded"}
                          value={buttonText}/>
        </form>
    )
}