export default function defaultBtn({
    innerText,
    custom
    } : {
    innerText: string,
    custom: string
    }) {
    return (
        <>
            <div className={"w-[230px] h-[40px] grid place-items-center border-2 border-rose-500 rounded " + custom}>
                {innerText}
            </div>
        </>
    )
}