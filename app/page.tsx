import React from "react";
import MainLayout from "../components/mainPage/layout";
import Charging from "../components/mainPage/animation/charging";
import LoginForm from "../components/mainPage/form/loginForm";
import "../components/mainPage/animation/rendering.css"
import Head from "next/head";

export default function MainPage() {
    const commonId: string = "common";
    const sharedOne: string = "one";
    const sharedTwo: string = "two";
    return (
        <div className={"w-full h-full"}>
            <div className={"relative w-full h-screen min-h-[750px] sm:min-h-[800px] md:min-h-[920px] lg:min-h-[1050px]"}>
                <Charging
                    renderedElementId={commonId}
                    idForConnect1={sharedOne}
                    idForConnect2={sharedTwo} />
                <MainLayout layoutId={commonId}>
                    <LoginForm sharedId1={sharedOne} sharedId2={sharedTwo}/>
                </MainLayout>
            </div>
        </div>
)
}

/*
* <div className={"grid grid-rows-12"}>
                <div className={"h-full row-start-2 row-span-1 grid justify-center content-center px-[10px]"}>
                    <h2 className={"font-bold text-5xl text-slate-300"}>추월차선을 달리고 있나요?</h2>
                </div>
                <div className={"row-start-3 row-end-6 grid grid-rows-5 px-[30px]"}>
                    <form className={"row-span-2 grid grid-rows-3"}>
                        <div className={"row-span-1"}>
                            <InputElement type={"email"} placeholder={"/user/email%_"} custom={""}
                                          value={undefined}/>
                        </div>
                        <div className={"row-span-1"}>
                            <InputElement type={"password"} placeholder={"/login/pw%_"} custom={""}
                                          value={undefined}/>
                        </div>
                        <div className={"row-span-1"}>
                            <InputElement type={"submit"} placeholder={""}
                                          custom={"w-full border-2 border-white rounded"} value={"sign_in"}/>
                        </div>
                    </form>
                    <div className={"row-span-1"}>
                        <div className={"grid justify-center content-center"}>
                            <p className={"text-slate-300"}>
                                아직 소유한 계정이 없을 시 <Link href={"/signup"} className={"text-orange-500"}>회원가입</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>*/