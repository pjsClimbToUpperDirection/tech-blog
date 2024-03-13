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
        <div className={"relative w-full h-full min-h-[750px] sm:min-h-[800px] md:min-h-[920px] lg:min-h-[1050px]"}>
            <Charging
                renderedElementId={commonId}
                idForConnect1={sharedOne}
                idForConnect2={sharedTwo}/>
            <MainLayout layoutId={commonId}>
                <LoginForm sharedId1={sharedOne} sharedId2={sharedTwo}/>
            </MainLayout>
        </div>
    )
}

/*
* <div className={"w-screen h-screen"}>
            <div className={"relative w-full h-screen min-h-[750px] sm:min-h-[800px] md:min-h-[920px] lg:min-h-[1050px]"}>
                <Charging
                    renderedElementId={commonId}
                    idForConnect1={sharedOne}
                    idForConnect2={sharedTwo} />
                <MainLayout layoutId={commonId}>
                    <LoginForm sharedId1={sharedOne} sharedId2={sharedTwo}/>
                </MainLayout>
            </div>
        </div>*/
/*
* <div
     className={"relative w-full h-full min-h-[750px] sm:min-h-[800px] md:min-h-[920px] lg:min-h-[1050px]"}>
                <Charging
                    renderedElementId={commonId}
                    idForConnect1={sharedOne}
                    idForConnect2={sharedTwo}/>
                <MainLayout layoutId={commonId}>
                    <LoginForm sharedId1={sharedOne} sharedId2={sharedTwo}/>
                </MainLayout>
            </div>*/