import InputElementWithVar from "../../input/inputElementWithVar";
import InputElement from "../../input/inputElement";
import React, {useEffect, useState} from "react";

export default function SignUpForm({
    requestUrl,
    verificationUrl,
    method,
    }:{
    requestUrl: string,
    verificationUrl: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
}) {
    let username: string;
    let email: string;
    let password: string;
    let authNumber: string

    let usernameInputForm: HTMLInputElement;
    let emailInputForm: HTMLInputElement;
    let passwordInputForm: HTMLInputElement;
    let authNumberInputForm: HTMLInputElement;

    const [requested, setRequested] = useState(0);
    const [againRequested, setAgainRequested] = useState(0);

    async function handleSignUp(event) {
        event.preventDefault();
        if (requested == 0) {
            setRequested(1)
            usernameInputForm.value = ""
            console.log(username)
            // 가입 정보 임시 저장, 인증번호 요청
            /*let response= await fetch(requestUrl, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                    "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                    "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo"
                },
                body: JSON.stringify({
                    "Username": username,
                    "Password": password
                }),
            })
            console.log(response)
            if (response.status == 200) {
                response.json().then((data) => console.log(data)) // todo json 타입으로 정상 변환됨, 브라우저 내부에 임시 토큰 저장하는 로직 구현할 것
            } else if (response.status == 401) {
                alert("nope") // todo 비밀번호가 유효하지 않다는 걸 사용자에게 알리기
            } else {
                alert("other") // todo 500번대 서버 에러일 가능성 농후, 적절히 대처
            } */
        } else {
            // todo 인증번호 전송 로직 작성
            let transformed1 = authNumber.slice(0,3); // todo 인증번호가 작성되지 않은 상태에서 회원가입 요청 시도 시 Cannot read properties of undefined (reading 'slice') 발생, 유효성 검증 로직을 작성하여 해결하기
            let transformed2 = authNumber.slice(3,6);
            console.log(transformed1, transformed2)
            /*let response= await fetch(verificationUrl, {
                method: method,
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
            }*/
        }
    }

    function setUsername () {
        username = usernameInputForm.value;
    }
    function setEmail () {
        email = emailInputForm.value;
    }
    function setPassword () {
        password = passwordInputForm.value;
    }
    function setAuthNumber() {
        authNumber = authNumberInputForm.value;
    }

    function tryAgain() {
        if (againRequested == 0) {
            setAgainRequested(1)
            console.log(password)
            // 가입 정보 임시 저장, 인증번호 요청 todo 중복 코드로 판단될 시 별도 함수로 분리하여 handleSignUp 메서드와 공유
            /*let response= await fetch(requestUrl, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    // todo 브라우저에 저장된 토큰을 불러올 수 있도록 하기
                    "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJrMiIsImlhdCI6MTcwOTg3MDYzNywiZXhwIjoxNzA5ODcxNjM3fQ.dUdAS-X4eItW7pxuzAu8HWL518c2uJLNQfVlKOdKy3o",
                    "refresh": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4NzA2MzcsImV4cCI6MTcwOTg4MDYzN30.7JoPuT7LxpJAouXhgyBjzZPiShpADGXSAGggopMqiCo"
                },
                body: JSON.stringify({
                    "Username": username,
                    "Password": password
                }),
            })
            console.log(response)
            if (response.status == 200) {
                response.json().then((data) => console.log(data)) // todo json 타입으로 정상 변환됨, 브라우저 내부에 임시 토큰 저장하는 로직 구현할 것
            } else if (response.status == 401) {
                alert("nope") // todo 비밀번호가 유효하지 않다는 걸 사용자에게 알리기
            } else {
                alert("other") // todo 500번대 서버 에러일 가능성 농후, 적절히 대처
            } */
        }
    }

    useEffect(() => {
        usernameInputForm = document.getElementById("id_signUpForm") as HTMLInputElement;
        emailInputForm = document.getElementById("email_signUpForm") as HTMLInputElement;
        passwordInputForm = document.getElementById("pw_repeat_signUpForm") as HTMLInputElement;
        authNumberInputForm = document.getElementById("auth_signUpForm") as HTMLInputElement;
    }, [requested]);
    return (
        <form className={"h-full grid grid-rows-5"} onSubmit={handleSignUp} id={"signUpForm"}>
            {requested == 0 ?
                <>
                    <div className={"row-span-1"}>
                        <InputElementWithVar type={"text"} placeholder={"/signup/username%_"} custom={""} value={undefined}
                                             id={"id_signUpForm"} stateVar={setUsername}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElementWithVar type={"email"} placeholder={"/signup/user/email%_"} custom={""} value={undefined}
                                             id={"email_signUpForm"} stateVar={setEmail}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElementWithVar type={"password"} placeholder={"./signup/pw%_"} custom={""} value={undefined}
                                             id={"pw_signUpForm"} stateVar={undefined}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElementWithVar type={"password"} placeholder={"./signup/pw%_"} custom={""} value={undefined}
                                             id={"pw_repeat_signUpForm"} stateVar={setPassword}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElement type={"submit"} placeholder={""} custom={"w-full border-2 border-white rounded"}
                                      value={"인증번호 요청"}/>
                    </div>
                </>
                :
                <>
                    <div className={"row-span-1"}>
                        <InputElementWithVar placeholder={"인증 번호 입력"} custom={""} type={"text"}
                                             value={undefined} id={"auth_signUpForm"} stateVar={setAuthNumber}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElement type={"submit"} placeholder={""}
                                      custom={"border-2 border-white rounded"} value={"눌러서 회원가입 요청"}/>
                    </div>
                    <div className={"row-span-2 text-gray-200"}>
                        <p>인증번호는 회원가입 양식 작성 시의 주소로 전송되며 유효기간 만료 시 양식을 다시 작성해야 함에 유념하시기 바랍니다.</p>
                        <p className={"text-orange-500"} onClick={tryAgain}>클릭하여 인증번호를 다시 전송..</p>
                    </div>
                </>
            }
        </form>
    )
}