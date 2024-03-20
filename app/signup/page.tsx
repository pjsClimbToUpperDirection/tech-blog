import Link from "next/link";
import React from "react";
import SignUpForm from "../../components/submit/signin_up/signUpForm";

export default function signUp() {
    let requestUrl = process.env.BACKEND_ORIGIN + "/api/v1/account-api/register/request"
    let verificationUrl = process.env.BACKEND_ORIGIN + "/api/v1/account-api/register/verification"
    return (
        <div className={"grid justify-items-center h-screen min-h-[900px]"}>
            <div
                className={"w-full sm:w-[540px] bg-black h-[600px] z-20  absolute top-[130px] sm:top-[200px]  grid grid-rows-7 rounded px-[40px]  sm:border-2 border-slate-100"}>
                <div className={"row-span-6 grid grid-rows-7"}>
                    <div className={"row-span-1 grid content-center text-slate-300"}>
                        <p>기술 블로그에 회원가입</p>
                    </div>
                    <div className={"row-span-6"}>
                        <SignUpForm
                            requestUrl={requestUrl}
                            verificationUrl={verificationUrl}/>
                    </div>
                </div>
                <div className={"row-span-1 grid content-center"}>
                    <p className={"text-slate-300"}>
                        이미 소유한 계정이 존재할 시 <Link href={"/signin"} className={"text-orange-500"}>로그인</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
/*
* <div className={"row-span-1 grid content-center"}>
                                    <input className={"bg-black"}
                                           placeholder={"/signup/username%_"}/>
                                </div>
                                <div className={"row-span-1 grid content-center"}>
                                    <input className={"bg-black"}
                                           placeholder={"/signup/user/email%_"}/>
                                </div>
                                <div className={"row-span-1 grid content-center"}>
                                    <input type={"password"} className={"bg-black"}
                                           placeholder={"./signup/pw%_"}/>
                                </div>
                                <div className={"row-span-1 grid content-center"}>
                                    <input type={"password"} className={"bg-black"}
                                           placeholder={"./pw/confirm%_"}/>
                                </div>
                                <div className={"row-span-1 grid content-center"}>
                                    <input type={"submit"}
                                           className={"w-full bg-black border-2 border-white rounded"}
                                           value={"sign_up"}/>
                                </div>*/