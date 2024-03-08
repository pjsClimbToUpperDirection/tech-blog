import React from "react";

export default function FormForModification({
    // todo 추후 양식 제출을 위하여 필요한 값이 있을 시 인자 추가
    children,
    handleSubmit
    }:{
    children: React.ReactNode,
    handleSubmit: (event: any) => void | undefined
}) {
    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-full relative"}>
                <div className={"w-full h-fit absolute top-[70px]"}>
                    <div className={"w-full h-full grid content-center"}>
                        {handleSubmit != undefined ?
                            <form onSubmit={handleSubmit}>
                                {children}
                            </form> :
                            <form>
                                {children}
                            </form>}
                    </div>
                </div>
            </div>
        </div>
    )
}