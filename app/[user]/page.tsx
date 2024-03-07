import Layout from "../../components/layout/layout";
import Link from "next/link";

export default function Profile({ params } : { params: { user: string }}) {
    // todo 해당 페이지 랜더링 시 서버 측에서 api 호출, 레이아웃에 데이터가 반영되도록 구현하기
    const contentArray: { id: number, mainTitle: string, infoTitle: string | undefined, info: string | undefined, content: string | undefined, linkContent: string | undefined, href: string | undefined }[] = [
        {
            id: 1,
            mainTitle: "비밀번호",
            infoTitle: "마지막 수정일자..",
            info: "이곳에 수정일자 fetch 하여 랜더링하도록 구현",
            content: "비밀번호는 타인이 유추하기 어렵도록 구성해야 하며 정기적인 수정이 권장됩니다. ",
            linkContent: "지금 수정하기..",
            href: "../confirmation/" + params.user + "/account/password"
        },
        {
            id: 2,
            mainTitle: "이메일 주소",
            infoTitle: "현재 확인된 주소..",
            info: "이곳에 주소 fetch 하여 랜더링하도록 구현",
            content: "이메일 주소는 초기 등록, 수정 시 인증번호를 통한 확인이 요구됩니다. ",
            linkContent: "지금 수정하기..",
            href: "../confirmation/" + params.user + "/account/email"
        },
        {
            id: 3,
            mainTitle: "계정 삭제",
            infoTitle: "계정 삭제는 추가적인 본인 확인을 요구하며 요청 이후 취소할 수 없습니다.",
            info: undefined,
            content: undefined,
            linkContent: "본인 확인 후 삭제 페이지로 이동..",
            href: "../confirmation/" + params.user + "/account/deletion"
        }
    ]
    return (
        <Layout customForRoot={""}>
            <div className={"w-full h-full text-gray-200"}>
                <div className={"w-full h-[70px] grid content-center"}>
                    <p className={"grid justify-items-center text-[25px]"}>{params.user} 의 계정 상세 정보</p>
                </div>
                <div className={"w-full h-full grid grid-rows-11 p-2"}>
                    <div className={"w-full row-span-3 sm:border-2  rounded grid grid-rows-3"}>
                        {contentArray.map((content) => (
                            <MainContent key={content.id} contents={content}/>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function MainContent({
    contents
    }:{
    contents: { mainTitle: string, infoTitle: string, info: string, content: string, linkContent: string, href: string },
    }) {
    return (
        <div className={"w-full row-span-1 px-4 py-4 grid grid-rows-5"}>
            <div className={"row-span-1 grid max-sm:content-center"}>
                <div className={"h-fit border-b-2"}>
                    <p className={"pl-1.5 w-fit"}>{contents.mainTitle}</p>
                </div>
            </div>
            <div className={"w-full h-full row-span-4 grid grid-rows-3"}>
                <div className={"w-full h-full row-span-1"}>
                    <p>{contents.infoTitle}</p>
                    <p>{contents.info}</p>
                </div>
                <div className={"w-full h-full row-span-2 grid content-center"}>
                    <div>
                        <p>{contents.content}</p>
                        <Link href={contents.href} className={"text-blue-200"}>{contents.linkContent}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}