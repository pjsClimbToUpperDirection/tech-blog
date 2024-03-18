import React from "react";
import Re_verificationForm from "../../../../../../components/submit/re_verificationForm";

export default function throughPassword({
    params
    }:{
    params: { action: string, user: string, what: string, for: string }
    }) {
    // todo Re_verificationForm 내부에 경로 파라미터를 이용하여 목표한 폼을 반환하는 경로를 구성하는 로직 작성할 것
    let url = "http://localhost:1701/api/v1/auth-api/verification"
    return (
        <div className={"w-full h-screen min-h-[900px]"}>
            <div className={"grid justify-items-center h-full"}>
                <div
                    className={"w-full sm:w-[540px] bg-black h-[300px] sm:h-[270px] z-20  absolute top-[130px] sm:top-[200px]  grid grid-rows-7 rounded px-[40px]  sm:border-2 border-slate-100"}>
                    <div className={"row-span-6 grid grid-rows-3"}>
                        <div className={"row-span-1 grid content-center text-slate-300"}>
                            <p>동작을 행하려는 이가 본인인지 확인</p>
                        </div>
                        <div className={"row-span-2"}>
                            <Re_verificationForm
                                buttonText={"눌러서 확인 절차 이행"}
                                url={url}
                                params={params}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}