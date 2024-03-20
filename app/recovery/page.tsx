import Link from "next/link";
import React from "react";
import AccountRecovery from "../../components/submit/accountRecovery";

export default function Recovery() {
    let urlForAuthNumber = process.env.BACKEND_ORIGIN + "/api/v1/account-api/recovery/account/request"
    let urlForMainRequest = process.env.BACKEND_ORIGIN + "/api/v1/account-api/recovery/account/verification"
    return (
        <div className={"grid justify-items-center h-screen min-h-[900px]"}>
            <div
                className={"w-full sm:w-[540px] bg-black h-[580px] z-20  absolute top-[180px] sm:top-[200px]  grid grid-rows-7 rounded px-[40px]  sm:border-2 border-slate-100"}>
                <div className={"row-span-6 grid grid-rows-7"}>
                    <div className={"row-span-1 grid content-center text-slate-300"}>
                        <p>인증을 통한 암호 재설정</p>
                    </div>
                    <div className={"row-span-6"}>
                        <AccountRecovery
                            verificationUrl={urlForMainRequest}
                            requestUrl={urlForAuthNumber}/>
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