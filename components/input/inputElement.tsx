export default function inputElement({
    // todo 추후 양식 제출을 위하여 필요한 값이 있을 시 인자 추가
      placeholder,
      type,
      custom,
      value,
      id,
    }:{
      placeholder: string,
      type: string,
      custom: string,
      value: string | undefined,
      id: string | undefined
    }) {
    // div 같은 컨테이너 태그 등으로 감싸는 식으로 크기, 위치를 조정할 것
    return (
        <>
            <div className={"w-full h-full grid content-center"}>
                <input id={id} className={"inputElement  bg-black " + custom}
                       placeholder={placeholder} type={type} value={value}/>
            </div>
        </>
    )
}