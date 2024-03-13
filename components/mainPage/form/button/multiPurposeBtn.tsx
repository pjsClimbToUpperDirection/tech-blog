export default function MultiPurposeBtn({
    content,
    type
    }:{
    content: string,
    type: "submit" | "reset" | "button"
}) {
    // div 같은 컨테이너 태그 등으로 감싸는 식으로 크기, 위치를 조정할 것
    return (
        <button className={"w-full h-full text-white bg-indigo-500 rounded-xl"} type={type}>
            {content}
        </button>
    )
}