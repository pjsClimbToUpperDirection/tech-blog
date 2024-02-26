import React from "react";

export default function Layout({
    customForRoot,
    children
    } : {
    customForRoot: string,
    children: React.ReactNode
    }) {
    return (
        <div className={"absolute top-[70px] w-full h-[2100px] flex flex-col flex-auto bg-black z-10 " + customForRoot}>
            <div className={"w-full h-full flex justify-center"}>
                <div
                    className={"max-sm:max-w-[400px] h-full grid grid-cols-1 py-[5px]  sm:w-[400px] lg:w-[500px]"}>
                    {children}
                </div>
            </div>
        </div>
    )
}