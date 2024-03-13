import { RegisterOptions, UseFormRegister } from "react-hook-form";

export default function InputElement({
    placeholder,
    type,
    register,
    alias,
    options,
    message,
    elementId
    }:{
    placeholder: string,
    type: string,
    register: UseFormRegister<any>,
    alias: string
    options: RegisterOptions,
    message: string,
    elementId: string
}) {
    // register 메서드로 요소를 등록(register)
    // div 같은 컨테이너 태그 등으로 감싸는 식으로 크기, 위치를 조정할 것
    let custom: string;
    if (message.length > 1) {
        custom = "border-2 border-orange-600"
    } else {
        custom = ""
    }
    return (
        <>
            <div className={"w-full h-full grid grid-rows-5 " + custom} id={elementId}>
                <input className={"inputElement  row-span-3 bg-black text-gray-200"}
                       placeholder={placeholder}
                       type={type}
                       {...register(alias, options)}/>
                <div className={"row-span-2 text-lime-500 px-[3px]"}><p>{message}</p></div>
            </div>
        </>
    )
}