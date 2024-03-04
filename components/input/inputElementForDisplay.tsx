import React from "react";


// 값을 입력받는 대신 표시하는 용도로만 사용
export default function InputElementForDisplay({
    displayedValue,
    alertWithFog,
    custom
    }:{
    displayedValue: string,
    alertWithFog: (event: any) => void | undefined,
    custom: string
    }) {
    return (
        <>
            {alertWithFog != undefined ?
                <div className={"w-full h-full grid content-center"}>
                    <input className={"inputElement  bg-black " + custom} type={"text"} value={displayedValue} readOnly={true}/>
                </div>
                :
                <div className={"w-full h-full grid content-center"}>
                    <input className={"inputElement  bg-black " + custom} type={"text"} value={displayedValue} readOnly={true}/>
                </div>
            }
        </>
    )
}