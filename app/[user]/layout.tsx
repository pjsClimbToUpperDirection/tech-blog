import React from "react";
import "../../components/globals.css"
import LayoutHeader from "../../components/layout/layoutHeader";
import MenuBar from "../../components/layout/menuBar"

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}

export default function UserLayout({
    children,
    params
    }: {
    children: React.ReactNode,
    params: { user: string }
}) {
    const menuForBar = [
        { id: 1, title: "sign_out", href: "/" },
        { id: 2, title: "post_new", href: "/" + params.user + "/creation/post" },
        { id: 3, title: "user_profile", href: "/" + params.user },
        { id: 4, title: "modification-account-password", href: "/" + params.user + "/modification/account/password"},
        { id: 4, title: "modification-account-email", href: "/" + params.user + "/modification/account/email"},
        { id: 5, title: "modification-post", href: "/" + params.user + "/modification/post"}
    ]
    return (
        <div className={"w-full h-[2240px]"}>
            <LayoutHeader user={params.user}/>
            <MenuBar menu={menuForBar}/>
            {children}
        </div>
    )
}