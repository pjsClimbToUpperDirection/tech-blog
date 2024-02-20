import React from "react";
import "../../components/globals.css"
import LayoutHeader from "../../components/layout/layoutHeader";
import LayoutFooter from "../../components/layout/layoutFooter";
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
    return (
        <div className={"w-full h-[2240px]"}>
            <LayoutHeader user={params.user}/>
            <MenuBar user={params.user}/>
            {children}
            <LayoutFooter/>
        </div>
    )
}