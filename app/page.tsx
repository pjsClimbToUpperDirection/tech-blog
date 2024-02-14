import Form from "../components/root/form"
export default function MainPage() {
    // todo 추후 검색엔진 최적화 구현하기
    return (
        <>
            <div id={"mainPage"} className={"h-[1720px] w-full bg-white p-[10px] absolute z-10"}>
                <div className={"w-full h-[420px]   sm:h-[260px] md:h-[200px] lg:h-[140px] xl:h-[100px]   text-6xl px-[90px] p-[10px] absolute top-0 grid items-center justify-items-start"}>
                    누군가가 만들고 작성하는 중인 기술 블로그
                </div>
                <div className={"h-[1300px] w-full top-[420px]  sm:top-[260px] md:top-[200px] lg:top-[140px] xl:top-[100px]  text-4xl p-[10px] px-[90px] absolute"}>
                    <p className={"text-[20px] max-w-[900px] h-auto"}>
                        본 블로그에 배움을 기록하는 것이 하루하루 지켜볼 때에는 비록 새싹이 언제 자라나는지 뚫어저라 지켜보는 느낌일지도 모릅니다
                        그러나 한결같이 본인의 머리와 존재를 어렴풋이 스치고 지나가는 지식과 사례를 기술하다 보면 어느덧 본인의 잠재력은 잠시 잊고 있다 보니 그세 몰라보게 자란 새싹처럼 당신을
                        맞이할 것이고
                        이는 당신으로 하여금 배움에 대한 열망을 이끌어낼 것입니다.
                    </p>
                </div>
            </div>
            <Form/>
        </>
    )
}