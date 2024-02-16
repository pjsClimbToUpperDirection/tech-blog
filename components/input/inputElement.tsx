export default function inputElement({
      placeholder,
      type,
      custom,
      value
    }:{
      placeholder: string,
      type: string,
      custom: string,
      value: string | undefined
    }) {
    // grid-row 설정하여 구획을 지정해 주기
    return (
        <>
            <div className={"row-span-1 grid content-center"}>
                <input className={"inputElement  bg-black " + custom}
                       placeholder={placeholder} type={type} value={value}/>
            </div>
        </>
    )
}