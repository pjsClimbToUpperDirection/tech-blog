"use client"

import FormForModification from "../modification/formForModification";
import InputElement from "../input/inputElement";
import React, {useEffect} from "react";
import InputElementWithVar from "../../components/input/inputElementWithVar"

export default function PasswordModificationForm({
    url,
    method,
    }:{
    url: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
    }) {
    // todo handleSubmit 인자에 적절한 메서드(요청 전송 로직) 추가 (emailAddressModificationForm 참고)
    let newPasscode: string;
    let repeat: string;
    let newPasscodeElement: HTMLInputElement;
    let repeatElement: HTMLInputElement;
    async function handlePwModification(event) {
        event.preventDefault();
        if (newPasscode == repeat) { // 두 입력된 암호가 같은 경우
            let response= await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                    "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                    "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo"
                },
                body: JSON.stringify({
                    "password": repeat
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
        } else {
            // 두 입력된 암호가 같지 않을 시 대응하는 로직
            // todo 본 if else 문으로 대응하기보다는 유효성 검증 라이브러리 react hook form 사용하여 대응하는 코드 구현해 보기
        }
    }

    function setNewPasscode () {
        newPasscode = newPasscodeElement.value;
    }
    function setRepeat () {
        repeat = repeatElement.value;
    }

    useEffect(() => {
        newPasscodeElement = document.getElementById("newPasscode") as HTMLInputElement;
        repeatElement = document.getElementById("repeat") as HTMLInputElement;
    }, []);
    return (
        <FormForModification handleSubmit={handlePwModification}>
            <div className={"w-full h-[260px] sm:border-2 border-slate-200"}>
                <div className={"w-full h-full grid content-center"}>
                    <div className={"w-full h-fit"}>
                        <InputElementWithVar type={"password"} value={undefined} custom={"m-3"} placeholder={"새 비밀번호"} id={"newPasscode"} stateVar={setNewPasscode}/>
                    </div>
                    <div className={"w-full h-fit"}>
                        <InputElementWithVar type={"password"} value={undefined} custom={"m-3"} placeholder={"확인"} id={"repeat"} stateVar={setRepeat}/>
                    </div>
                    <div className={"w-full h-fit"}>
                        <InputElement type={"submit"} placeholder={""}
                                      custom={"border-2 border-white rounded m-4"} value={"비밀번호 변경"}/>
                    </div>
                </div>
            </div>
        </FormForModification>
    )
}