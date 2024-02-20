import React from "react";
import "../../components/globals.css"
import LayoutHeader from "../../components/layout/layoutHeader";
import LayoutFooter from "../../components/layout/layoutFooter";

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
            <>
                <LayoutHeader user={params.user}/>
                <div id={"main"}>
                    <div className={"w-full h-[2240px] z-10"}>
                        {children}
                    </div>
                </div>
                <LayoutFooter/>
            </>
    )
}