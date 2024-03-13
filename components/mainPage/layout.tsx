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
                 className={"absolute top-0 w-full h-full flex flex-col flex-auto opacity-0"}>
                <div className={"relative w-full h-full"}>
                    <div className={"absolute top-0 w-full h-full"}>
                        <div
                            className={"opacity-80 w-full h-full flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"}>
                        </div>
                    </div>
                    <div className={"absolute top-0 w-full h-full"}>
                        <div
                            className={"w-full h-full flex justify-center"}>
                            <div
                                className={"w-full h-full mt-1 sm:max-w-[725px]"}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}