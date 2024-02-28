import React from "react";

export default function FormForModification({
    // todo 추후 양식 제출을 위하여 필요한 값이 있을 시 인자 추가
    children
    }:{
    children: React.ReactNode,
}) {
    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-full relative"}>
                <div className={"w-full h-fit absolute top-[70px]"}>
                    <div className={"w-full h-full grid content-center"}>
                        <form>
                            {children}
                        </form>
                    </div>
                </div>
                <div className={"w-full h-fit absolute bottom-[40px]"}>
                    <div className={"w-full h-full grid content-center justify-items-center"}>
                        <p className={"text-orange-500"}>여기까지 내려오셨다면??</p>
                        <p className={"text-orange-500"}>위로 올라가세요</p>
                    </div>
                </div>
            </div>
        </div>
    )
}