import React from "react";
import LayoutFooter from "../../../../components/layout/layoutFooter";


export default function pageLayout({
    children,
    params
    }: {
    children: React.ReactNode,
    params: { page: number }
}) {
    let latch = 0;
    let previousY = 0;
    return (
        <div className={"w-full h-full"}>
            {children}
            <LayoutFooter latch={latch} previousY={previousY} pageNumber={params.page}/>
        </div>
    )
}