import React from "react";
import MenuBarButton from "./Button/menuBarButton"
import MenuBarExtendedArea from "./extended/menuBarExtendedArea";

export default function menuBar({
    rootId,
    user
    } : {
    rootId: string,
    user: string
}) {
    const menu: { id:number, title: string, href: string, form: string }[] = [
        { id: 1, form: "button", title: "로그아웃", href: "/" },
        { id: 2, form: "button", title: "게시글 목록", href: "/" + user + "/main/1" },
        { id: 3, form: "button", title: "게시글 작성란", href: "/" + user + "/creation/post" },
        { id: 4, form: "extended", title: "계정 정보 수정-암호", href: "/" + user + "/modification/account/password" },
        { id: 5, form: "extended", title: "계정 정보 수정-이메일", href: "/" + user + "/modification/account/email" },
    ]
    // todo 메뉴바에 표시할 이메일 주소, 암호의 최근 수정일자는 별도의 변수를 선언하여 컴포넌트에 대입할수 있도록 하기
    return (
        <div id={rootId} className={"absolute top-[70px] w-full h-[2100px] flex flex-col flex-auto z-0 bg-black"}>
            <div className={"w-full h-full flex justify-center"}>
                <div
                    className={"max-sm:max-w-[400px] h-full w-full grid grid-cols-1 py-[5px]  sm:w-[400px] lg:w-[500px]"}>
                    <div className={"w-full h-full bg-black"}>
                        {menu.map((each) => (
                            each.form == "button" ?
                                <MenuBarButton key={each.id} href={each.href} title={each.title}/>
                                :
                                <MenuBarExtendedArea key={each.id} href={each.href} title={each.title}/>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}