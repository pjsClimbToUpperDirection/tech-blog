import React from "react";

export default function MainLayout({
    layoutId,
    children
    }:{
    layoutId: string,
    children: React.ReactNode
}) {
    return (
        <>
            <div id={layoutId}
                 className={"absolute top-0 w-full h-full flex flex-col flex-auto bg-slate-300 opacity-70"}>
                <div className={"w-full h-full flex justify-center"}>
                    <div
                        className={"relative max-sm:max-w-[400px] max-sm:w-full h-full grid grid-cols-1 py-[5px] sm:w-[400px] lg:w-[500px]"}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}