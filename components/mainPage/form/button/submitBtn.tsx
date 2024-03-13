export default function SubmitBtn({
    content,
    innerContentId
    }:{
    content: string,
    innerContentId: string
}) {
    // div 같은 컨테이너 태그 등으로 감싸는 식으로 크기, 위치를 조정할 것
    return (
        <button className={"w-full h-full text-white bg-indigo-500 rounded-xl grid content-center justify-items-center"} type={"submit"}>
            <div className={"w-[300px] h-fit px-[120px]"} id={innerContentId}>
                <div className={"w-[60px] h-fit"}>
                    {content}
                </div>
            </div>
        </button>
    )
}