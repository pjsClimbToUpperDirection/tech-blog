"use client"

import InputElement from "../input/inputElement";
import React, {useEffect} from "react";
import InputElementWithVar from "../input/inputElementWithVar"

export default function Re_verificationForm({
    url,
    method,
    buttonText
    }:{
    url: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
    buttonText: string
}) {
    let passcode: string;
    let passcodeArea: HTMLInputElement;

    useEffect(() => {
        passcodeArea = document.getElementById("passcode") as HTMLInputElement
    }, []);

    async function generateRequest(event) {
        event.preventDefault();
        let response= await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo"
            },
            body: JSON.stringify({
                "password": passcode
            }),
        })
        console.log(response)
        if (response.status == 200) {
            response.json().then((data) => console.log(data)) // todo json 타입으로 정상 변환됨, 브라우저 내부에 임시 토큰 저장하는 로직 구현할 것
        } else if (response.status == 401) {
            alert("nope") // todo 비밀번호가 유효하지 않다는 걸 사용자에게 알리기
        } else {
            alert("other") // todo 500번대 서버 에러일 가능성 농후, 적절히 대처
        }
    }
    function setPasscodeFn() {
        passcode = passcodeArea.value;
    }
    return (
        <form className={"h-full grid grid-rows-2"} onSubmit={generateRequest}>
            <div className={"row-span-1"}>
                <InputElementWithVar type={"text"} placeholder={"/confirm/password%_"} custom={""}
                              value={undefined} id={"passcode"} stateVar={setPasscodeFn}/>
            </div>
            <div className={"row-span-1"}>
                <InputElement type={"submit"} placeholder={""}
                              custom={"w-full border-2 border-white rounded"}
                              value={buttonText}/>
            </div>
        </form>
    )
}