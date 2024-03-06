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
    const commonId1 = "commonId1"
    return (
        <>
            <div className={"w-full h-[2240px]"}>
                <LayoutHeader user={params.user} externalId={commonId1}/>
                <MenuBar rootId={commonId1} user={params.user}/>
                {children}
            </div>
        </>
    )
}