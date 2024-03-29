import Link from "next/link";
import React from "react";
import SignInForm from "../../components/submit/signin_up/signInForm";

export default function signIn() {
    let url = process.env.BACKEND_ORIGIN + "/api/v1/auth-api/issue"
    return (
        <div className={"grid justify-items-center h-screen min-h-[900px]"}>
            <div
                className={"w-full sm:w-[540px] bg-black absolute top-[130px] sm:top-[200px] h-[400px] z-20 grid grid-rows-4 rounded px-[40px] sm:border-2 border-slate-100"}>
                <div className={"row-span-4 grid grid-rows-5"}>
                    <div className={"row-span-1 grid content-center text-slate-300"}>
                        <p>기술 블로그에 로그인</p>
                    </div>
                    <div className={"row-span-3"}>
                        <SignInForm signInUrl={url}/>
                    </div>
                    <div className={"row-span-1 grid content-center grid-rows-2"}>
                        <div className={"row-span-1"}>
                            <p className={"text-slate-300"}>
                                <Link href={"/recovery"} className={"text-orange-500"}>암호를 잊어버리셨나요?</Link>
                            </p>
                        </div>
                        <div className={"row-span-1"}>
                            <p className={"text-slate-300"}>
                                아직 계정을 소유하고 있지 않다면? <Link href={"/signup"} className={"text-blue-200"}>회원가입</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}