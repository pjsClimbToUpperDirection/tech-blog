import { RegisterOptions, UseFormRegister } from "react-hook-form";

export default function InputElement({
    placeholder,
    type,
    register,
    alias,
    options,
    message,
    indicatorId,
    errorMsgAreaId
    }:{
    placeholder: string,
    type: string,
    register: UseFormRegister<any>,
    alias: string
    options: RegisterOptions,
    message: string,
    indicatorId: string,
    errorMsgAreaId: string
}) {
    let MsgArea :HTMLElement;
    // 초기 마운트시에는 요소를 찾을 수 없음, state 변경으로 인한 리 랜더링 시 작동
    function displayMsg() { // 초기 마운트시에는 요소를 찾을 수 없음, state 변경으로 인한 리 랜더링 시 작동
        if (message.length > 1) {
            MsgArea = document.getElementById(errorMsgAreaId)
            MsgArea.classList.remove("displayErrMsg")
            MsgArea.classList.add("removeErrMsg")
            setTimeout(() => {
                MsgArea.classList.add("displayErrMsg")
            },100)
        }
    }

    displayMsg()
    // register 메서드로 요소를 등록(register)
    // div 같은 컨테이너 태그 등으로 감싸는 식으로 크기, 위치를 조정할 것
    // 전역 css 적용을 위해 input 태그 class 에 inputElement 추가
    return (
        <div className={"w-full h-full relative"}>
            <div className={"w-full h-full absolute top-0 p-1 z-10"}>
                <div className={"w-full h-full grid grid-rows-5"}>
                    <div className={"row-span-3 w-full h-full"}>
                        <input className={"inputElement w-full h-full bg-black text-gray-200 p-1"}
                               placeholder={placeholder}
                               type={type}
                               {...register(alias, options)} />
                    </div>
                    <div className={"row-span-2 text-lime-500 px-[3px] bg-black"}>
                        <p id={errorMsgAreaId} className={"opacity-0"}>{message}</p>
                    </div>
                </div>
            </div>
            <div className={"w-full h-full absolute top-0 rounded"} id={indicatorId}/>
        </div>
    )
}