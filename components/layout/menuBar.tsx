import React from "react";
import MenuBarButton from "./Button/menuBarButton"

export default function menuBar({
    rootId,
    user
    } : {
    rootId: string,
    user: string
}) {
    const menu: { id:number, title: string, href: string }[] = [
        { id: 1, title: "로그아웃", href: "/logout" },
        { id: 2, title: "게시글 목록", href: "/" + user + "/main/1" },
        { id: 3, title: "게시글 작성란", href: "/" + user + "/creation/post" },
        { id: 4, title: "주 페이지", href: "/" + user }
    ]
    return (
        <div id={rootId} className={"absolute top-[70px] w-full h-[2100px] flex flex-col flex-auto z-0 bg-black"}>
            <div className={"w-full h-full flex justify-center"}>
                <div
                    className={"max-sm:max-w-[400px] h-full w-full grid grid-cols-1 py-[5px]  sm:w-[400px] lg:w-[500px]"}>
                    <div className={"w-full h-full bg-black"}>
                        {menu.map((each) => (
                            <MenuBarButton key={each.id} href={each.href} title={each.title}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}