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
        { id: 2, title: "list_of_posts", href: "/" + params.user + "/main/1" },
        { id: 3, title: "post_new", href: "/" + params.user + "/creation/post" },
        { id: 4, title: "user_profile", href: "/" + params.user },
        { id: 5, title: "modification-account-password", href: "/" + params.user + "/modification/account/password"},
        { id: 6, title: "modification-account-email", href: "/" + params.user + "/modification/account/email"},
    ]
    return (
        <>
            <div className={"w-full h-[2240px]"}>
                <LayoutHeader user={params.user}/>
                <MenuBar menu={menuForBar}/>
                {children}
            </div>
        </>
    )
}