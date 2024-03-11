import InputElementWithVar from "../../input/inputElementWithVar";
import InputElement from "../../input/inputElement";
import React, {useState} from "react";
import {useForm, SubmitHandler, SubmitErrorHandler, FieldErrors} from "react-hook-form";

interface SignUpFormInput {
    username: string | undefined,
    email: string | undefined,
    password: string | undefined,
    repeatedPassword: string | undefined,
    authNumber: string | undefined
}

// todo 유효성 검증 구현 완료됨, 이후 필요한 로직 구현(요청, 응답, 리디렉션)
export default function SignUpForm({
    requestUrl,
    verificationUrl,
    method,
    }:{
    requestUrl: string,
    verificationUrl: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
}) {
    let password: string;

    let usernameInputForm: HTMLInputElement;

    const [requested, setRequested] = useState(0);
    const [againRequested, setAgainRequested] = useState(0);

    const {
        register,
        handleSubmit,
        watch
    } = useForm<SignUpFormInput>();

    const onSubmit: SubmitHandler<SignUpFormInput> = async (data: SignUpFormInput) => {
        // 유효성 검증을 통과하였을 시 작동
        if (requested == 0) {
            usernameInputForm = document.getElementById("id_signUpForm") as HTMLInputElement;
            usernameInputForm.value = ""
            setRequested(1)
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
            let transformed1 = data.authNumber.slice(0,3); // todo 인증번호가 작성되지 않은 상태에서 회원가입 요청 시도 시 Cannot read properties of undefined (reading 'slice') 발생, 유효성 검증 로직을 작성하여 해결하기
            let transformed2 = data.authNumber.slice(3,6);
            console.log(transformed1 + "__" + transformed2)
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

    const onError: SubmitErrorHandler<SignUpFormInput> = (error: FieldErrors<SignUpFormInput>) => {
        // 유효성 검증 과정에서 문제가 식별되었을 시 작동
        setCustomOfUsername("")
        setCustomOfEmail("")
        setCustomOfPassword("")
        setCustomOfRpPassword("")
        switch (true) {
            case error.username != undefined: {
                setCustomOfUsername(error.username.message)
                break
            }
            case error.email != undefined: {
                setCustomOfEmail(error.email.message)
                break
            }
            case error.password != undefined: {
                setCustomOfPassword(error.password.message)
                break
            }
            case error.repeatedPassword != undefined: {
                setCustomOfRpPassword(error.repeatedPassword.message)
                break
            }
            case error.authNumber != undefined: {
                setCustomOfAuthNumber(error.authNumber.message)
            }
        }
    }

    const [ customOfUsername, setCustomOfUsername ] = useState("");
    const [ customOfEmail, setCustomOfEmail ] = useState("");
    const [ customOfPassword, setCustomOfPassword ] = useState("");
    const [ customOfRpPassword, setCustomOfRpPassword ] = useState("");
    const [ customOfAuthNumber, setCustomOfAuthNumber ] = useState("");

    password = watch("password")

    function tryAgain() {
        if (againRequested == 0) {
            setAgainRequested(1)
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

    return (
        <form className={"h-full grid grid-rows-5"} onSubmit={handleSubmit(onSubmit, onError)} id={"signUpForm"}>
            {requested == 0 ?
                <>
                    <div className={"row-span-1 py-3"}>
                        <InputElementWithVar type={"text"}
                                             placeholder={"/signup/username%_"}
                                             value={undefined}
                                             id={"id_signUpForm"}
                                             register={register}
                                             alias={"username"}
                                             options={{
                                                 required: "사용자 이름은 필수 요소입니다.",
                                                 minLength: {
                                                     value: 5,
                                                     message: "5자 이하로 입력"
                                                 },
                                                 maxLength: {
                                                     value: 20,
                                                     message: '20자 이하로 입력'
                                                 }
                                             }}
                                             message={customOfUsername}/>
                    </div>
                    <div className={"row-span-1 py-3"}>
                        <InputElementWithVar type={"text"}
                                             placeholder={"/signup/user/email%_"}
                                             value={undefined}
                                             id={"email_signUpForm"}
                                             register={register}
                                             alias={"email"}
                                             options={{
                                                 required: "이메일 주소는 필수 요소입니다.",
                                                 minLength: {
                                                     value: 10,
                                                     message: "10자 이상 입력"
                                                 },
                                                 maxLength: {
                                                     value: 30,
                                                     message: "30자 이상 입력"
                                                 },
                                                 pattern: {
                                                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                     message: "통상적인 이메일 표현식에 맞추어 입력"
                                                 } }}
                                             message={customOfEmail}/>
                    </div>
                    <div className={"row-span-1 py-3"}>
                        <InputElementWithVar type={"password"}
                                             placeholder={"./signup/pw%_"}
                                             value={undefined}
                                             id={"pw_signUpForm"}
                                             register={register}
                                             alias={"password"}
                                             options={{
                                                 required: "비밀번호는 필수 요소입니다.",
                                                 minLength: {
                                                     value: 15,
                                                     message: "15자 이상 입력"
                                                 },
                                                 maxLength: {
                                                     value: 30,
                                                     message: "30자 이하로 입력"
                                                 },
                                             }}
                                             message={customOfPassword}/>
                    </div>
                    <div className={"row-span-1 py-3"}>
                        <InputElementWithVar type={"password"}
                                             placeholder={"./signup/pw%_"}
                                             value={undefined}
                                             id={"pw_repeat_signUpForm"}
                                             register={register}
                                             alias={"repeatedPassword"}
                                             options={{
                                                 required: "비밀번호 제차 입력이 요구됨",
                                                 validate: value => password == value || "초기 입력 비밀번호와 같지 않음"
                                             }}
                                             message={customOfRpPassword}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElement type={"submit"} placeholder={""} custom={"w-full border-2 border-white rounded"}
                                      value={"인증번호 요청"}/>
                    </div>
                </>
                :
                <>
                    <div className={"row-span-1"}>
                        <InputElementWithVar placeholder={"인증 번호 입력"}
                                             type={"text"}
                                             value={undefined}
                                             id={"auth_signUpForm"}
                                             register={register}
                                             alias={"authNumber"}
                                             options={{
                                                 required: "인증 번호 입력이 요구됨",
                                                 pattern: {
                                                     value: /[0-9]{6}/,
                                                     message: "6자리 숫자 입력"
                                                 }
                                             }}
                                             message={customOfAuthNumber}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElement type={"submit"} placeholder={""}
                                      custom={"border-2 border-white rounded"} value={"눌러서 회원가입 요청"}/>
                    </div>
                    <div className={"row-span-2 text-gray-200"}>
                        <p>6자리의 인증번호는 회원가입 양식 작성 시 입력된 주소로 전송되며 유효기간 만료 시 양식을 다시 작성해야 함에 유념하시기 바랍니다.</p>
                        <p className={"text-orange-500"} onClick={tryAgain}>클릭하여 인증번호를 다시 전송..</p>
                    </div>
                </>
            }
        </form>
    )
}