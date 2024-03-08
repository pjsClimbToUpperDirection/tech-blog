"use client"

import InputElement from "../input/inputElement";
import InputElementWithVar from "../input/inputElementWithVar"
import FormForModification from "../modification/formForModification";
import React, {useEffect, useState} from "react";


let EmailAddress: string = undefined; // 인증번호 요청에 따른 리 랜더링 으로 인한 이메일 주소 손실을 방지하고자 함수 외부에 선언
export default function emailAddressModificationForm({
    initUrl,
    mainUrl
    }:{
    initUrl: string,
    mainUrl: string
    }) {
    let AuthNumber: string;

    let Email: HTMLInputElement;
    let Auth: HTMLInputElement;
    const [requested, setRequested] = useState(0);
    // axios 사용하여 인증번호 요청, 주소 변경 요청 구현해 보기
    // 주소 변경 요청 시 InputValue(주소), 인증번호 담아서 요청하기
    async function handleRequest(event) {
        event.preventDefault(); // 기본 제출 동작 중단
        if (requested == 0) {
            setRequested(1);
            Email.value = ""
            console.log(EmailAddress);
            await sendInitRequest(initUrl)
        } else {
            console.log(EmailAddress + ", " + AuthNumber);
            await sendMainRequest(mainUrl, AuthNumber)
            // todo 리다이렉션 등과 같은 요청 후 처리 로직 작성할 것

            EmailAddress = undefined // 초기화
            AuthNumber = undefined
        }
    }

    function setAddressFn() {
        EmailAddress = Email.value
    }
    function setAuthNumFn() {
        AuthNumber = Auth.value
    }

    async function sendInitRequest(SubstitutedUrl: string) {
        let response= await fetch(SubstitutedUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo",
                "Authorization_Modification_Email": "" // 이메일 인증 번호를 보낼때 본인임을 인증하는 토큰
            },
            body: JSON.stringify({
                "email": EmailAddress
            }),
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

    async function sendMainRequest(SubstitutedUrl: string, AuthNumber: string) {
        let transformed1 = AuthNumber.slice(0,3);
        let transformed2 = AuthNumber.slice(3,6);
        let response= await fetch(SubstitutedUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo",
            },
            body: JSON.stringify({ // 인증번호
                "num1": transformed1,
                "num2": transformed2
            }),
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

    useEffect(() => {
        Email = document.getElementById("emailAddress") as HTMLInputElement
        Auth = document.getElementById("authNumber") as HTMLInputElement // 초기 랜더링 시 마운트되지 않는다.
    }, [requested]); // 의존 값 설정으로 해결
    return (
        <FormForModification handleSubmit={handleRequest}>
            <div className={"w-full h-[230px] sm:border-2 border-slate-200 grid content-center"}>
                {requested == 0 ?
                    <>
                        <div className={"w-full h-fit"}>
                            <InputElementWithVar placeholder={"변경하고자 하는 이메일 주소"} custom={"m-3 mx-5"} type={"text"}
                                          value={undefined} id={"emailAddress"} stateVar={setAddressFn}/>
                        </div>
                        <div className={"w-full h-fit"}>
                            <InputElement type={"submit"} placeholder={""}
                                          custom={"border-2 border-white rounded m-4"} value={"인증번호 요청"}/>
                        </div>
                    </>
                    :
                    <>
                        <div className={"w-full h-fit"}>
                            <InputElementWithVar placeholder={"인증 번호 입력"} custom={"m-3 mx-5"} type={"text"}
                                                 value={undefined} id={"authNumber"} stateVar={setAuthNumFn}/>
                        </div>
                        <div className={"w-full h-fit"}>
                            <InputElement type={"submit"} placeholder={""}
                                          custom={"border-2 border-white rounded m-4"} value={"주소 변경 요청"}/>
                        </div>
                    </>
                }
            </div>
        </FormForModification>
    )
}