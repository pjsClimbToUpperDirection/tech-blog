"use client"

import React, {useEffect} from "react";
import MenuBarButton from "./Button/menuBarButton"

export default function menuBar({
    user
    } : {
    user: string
}) {
    const menu = [
        { id: 1, title: "sign_out", href: "/" },
        { id: 2, title: "post_new", href: "/" + user + "/writeForm" },
        { id: 3, title: "user_profile", href: "/" + user }
    ]

    return (
        <div id={"menuBar"} className={"absolute top-[70px] w-full h-[2100px] flex flex-col flex-auto z-0 bg-black"}>
            <div className={"w-full h-full flex justify-center"}>
                <div
                    className={"max-sm:max-w-[400px] h-full w-full grid grid-cols-1 py-[5px]  sm:w-[400px] lg:w-[500px]"}>
                    <div className={"w-full h-full bg-black"}>
                        {menu.map((each) => (
                            <MenuBarButton key={each.id} href={each.href} title={each.title}></MenuBarButton>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}