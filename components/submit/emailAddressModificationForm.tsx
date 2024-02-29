"use client"

import InputElement from "../input/inputElement";
import InputElementWithVar from "../input/inputElementWithVar"
import FormForModification from "../modification/formForModification";
import React, {useEffect, useState} from "react";
import axios from "axios";


let EmailAddress: string = undefined; // 인증번호 요청에 따른 리 랜더링 으로 인한 이메일 주소 손실을 방지하고자 함수 외부에 선언
export default function emailAddressModificationForm() {
    let AuthNumber: string;

    let Email: HTMLInputElement;
    let Auth: HTMLInputElement;
    const [requested, setRequested] = useState(0);
    // axios 사용하여 인증번호 요청, 주소 변경 요청 구현해 보기
    // 주소 변경 요청 시 InputValue(주소), 인증번호 담아서 요청하기
    function handleAuthNumberRequest(event) {
        if (requested == 0) {
            event.preventDefault(); // 기본 제출 동작 중단
            setRequested(1);
            Email.value = ""
            console.log(EmailAddress);
            // 인증번호 발송 요청 로직 todo 추후 백앤드와 json 타입 객체로 API 를 통일, 요청과 응답을 주고받을수 있도록 조율할 것
            // axios.post("")
        } else {
            event.preventDefault(); // 기본 제출 동작 중단
            console.log(EmailAddress + ", " + AuthNumber);
            // todo 인증번호, 이메일을 요청 본문에 담아 전송(json),
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

    useEffect(() => {
        Email = document.getElementById("emailAddress") as HTMLInputElement
        Auth = document.getElementById("authNumber") as HTMLInputElement // 초기 랜더링 시 마운트되지 않는다.
    }, [requested]); // 의존 값 설정으로 해결
    return (
        <FormForModification handleSubmit={handleAuthNumberRequest}>
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