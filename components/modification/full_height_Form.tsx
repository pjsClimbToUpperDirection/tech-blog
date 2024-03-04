import React from "react";

export default function Full_height_Form({
    // todo 추후 양식 제출을 위하여 필요한 값이 있을 시 인자 추가
    children,
    handleSubmit
    }:{
    children: React.ReactNode,
    handleSubmit: (event: any) => void | undefined
}) {
    const TailwindInForm = "w-full h-full relative flex flex-col";
    return (
        <>
            {handleSubmit != undefined ?
                <form onSubmit={handleSubmit} className={TailwindInForm}>
                    {children}
                </form> :
                <form className={TailwindInForm}>
                    {children}
                </form>
            }
        </>
    )
}