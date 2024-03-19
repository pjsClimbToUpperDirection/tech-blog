"use client"

import InputElementWithVar from "../input/inputElementWithVar";
import InputElement from "../input/inputElement";
import React, {useState} from "react";
import {FieldErrors, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

interface AccountRecoveryForm {
    username: string | undefined,
    email: string | undefined,
    password: string | undefined,
    repeatedPassword: string | undefined,
    authNumber: string | undefined
}

export default function AccountRecovery({
    requestUrl,
    verificationUrl
    }:{
    requestUrl: string,
    verificationUrl: string
}) {
    let password: string;

    const [requested, setRequested] = useState(0);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch
    } = useForm<AccountRecoveryForm>();

    const onSubmit: SubmitHandler<AccountRecoveryForm> = async (data: AccountRecoveryForm) => {
        let transformed1: string;
        let transformed2: string;
        // 유효성 검증을 통과하였을 시 작동
        if (requested == 0) {
            // 가입 정보 임시 저장, 인증번호 요청
            let response = await fetch(requestUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": data.username,
                    "password": data.repeatedPassword,
                    "email": data.email
                }),
            })
            if (response.status == 204) {
                let usernameInputForm = document.getElementById("id_accountRecoveryForm") as HTMLInputElement;
                usernameInputForm.value = ""
                setRequested(1)
                setTimeout(() => {
                    let passwordInputForm = document.getElementById("pw_accountRecoveryForm") as HTMLInputElement;
                    passwordInputForm.value = ""
                }, 100)
            } else if (response.status == 409) {
                alert("타 유저가 해당 이름으로 사용자 계정 생성을 시도중입니다. 다른 이름을 사용하여 계정을 생성하십시요.")
            } else if (response.status == 400) {
                setCustomOfUsername("사용자 이름, 대응하는 이메일 주소를 다시 확인")
            }
        } else { // 인증번호 전송
            transformed1 = data.authNumber.slice(0,3);
            transformed2 = data.authNumber.slice(3,6);
            setCustomOfAuthNumber("")
            let response = await fetch(verificationUrl, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ // 인증번호, 변경할 암호
                    "num1": transformed1,
                    "num2": transformed2,
                    "password": data.repeatedPassword
                }),
            })
            if (response.status == 200) {
                router.replace("/");
            } else if (response.status == 401) {
                setCustomOfAuthNumber("인증번호 부정확, 재시도")
            }
        }
    }

    const onError: SubmitErrorHandler<AccountRecoveryForm> = (error: FieldErrors<AccountRecoveryForm>) => {
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

    password = watch("password"); // 재차 입력 비밀번호와 대조할 기존 password 의 입력란 감시

    return (
        <form className={"h-full"} onSubmit={handleSubmit(onSubmit, onError)} id={"accountRecoveryForm"}>
            {requested == 0 ?
                <div className={"h-full grid grid-rows-5"}>
                    <div className={"row-span-1 py-3"}>
                        <InputElementWithVar type={"text"}
                                             placeholder={"/signup/username%_"}
                                             value={undefined}
                                             id={"id_accountRecoveryForm"}
                                             register={register}
                                             alias={"username"}
                                             options={{
                                                 required: "사용자 이름은 필수 요소입니다.",
                                                 minLength: {
                                                     value: 3,
                                                     message: "3자 이상 입력"
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
                                             id={"email_accountRecoveryForm"}
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
                                                 }
                                             }}
                                             message={customOfEmail}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElement type={"submit"} placeholder={""} custom={"w-full border-2 border-white rounded"}
                                      value={"인증번호 요청"}/>
                    </div>
                    <div className={"row-span-2 text-gray-200"}>
                        <p>
                            6자리의 인증번호는 회원가입 양식 작성 시 입력된 주소로 전송되며 유효기간 만료 혹은 잘못된 주소를 작성하였을 시 양식을 다시 작성해야 함에 유념하시기
                            바랍니다.
                        </p>
                    </div>
                </div>
                :
                <div className={"h-full grid grid-rows-5"}>
                    <div className={"row-span-1"}>
                        <InputElementWithVar placeholder={"인증 번호 입력"}
                                             type={"text"}
                                             value={undefined}
                                             id={"auth_accountRecoveryForm"}
                                             register={register}
                                             alias={"authNumber"}
                                             options={{
                                                 required: "인증 번호 입력이 요구됨",
                                                 pattern: {
                                                     value: /[0-9]{6}/,
                                                     message: "6자리의 숫자 입력"
                                                 }
                                             }}
                                             message={customOfAuthNumber}/>
                    </div>
                    <div className={"row-span-1 py-3"}>
                        <InputElementWithVar type={"password"}
                                             placeholder={"./signup/pw%_"}
                                             value={undefined}
                                             id={"pw_accountRecoveryForm"}
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
                                             placeholder={"./signup/repeat/pw%_"}
                                             value={undefined}
                                             id={"pw_repeat_accountRecoveryForm"}
                                             register={register}
                                             alias={"repeatedPassword"}
                                             options={{
                                                 required: "비밀번호 재차 입력이 요구됨",
                                                 minLength: {
                                                     value: 15,
                                                     message: "15자 이상 입력"
                                                 },
                                                 maxLength: {
                                                     value: 30,
                                                     message: "30자 이하로 입력"
                                                 },
                                                 validate: value => password == value || "초기 입력 비밀번호와 같지 않음"
                                             }}
                                             message={customOfRpPassword}/>
                    </div>
                    <div className={"row-span-1"}>
                        <InputElement type={"submit"}
                                      placeholder={""}
                                      custom={"border-2 border-white rounded"}
                                      value={"눌러서 암호 수정 요청"}/>
                    </div>
                    <div className={"row-span-1 text-gray-200"}>
                        <p>
                            인증번호가 오지 않을 시 요청 절차를 다시 진행하십시요.
                        </p>
                    </div>
                </div>
            }
        </form>
    )
}