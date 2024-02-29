export default function inputElementWithId({
    placeholder,
    type,
    custom,
    value,
    id,
    stateVar
    }:{
    placeholder: string,
    type: string,
    custom: string,
    value: string | undefined,
    id: string,
    stateVar: (arg: any) => void
}) {
    // div 같은 컨테이너 태그 등으로 감싸는 식으로 크기, 위치를 조정할 것
    return (
        <>
            <div className={"w-full h-full grid content-center"}>
                <input className={"inputElement  bg-black " + custom}
                       placeholder={placeholder} type={type} value={value} id={id} onInput={stateVar}/>
            </div>
        </>
    )
}