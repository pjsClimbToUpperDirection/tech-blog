"use client"

import Link from "next/link";
import {useEffect, useState} from "react";

interface contentType {
    id: number,
    mainTitle: string,
    infoTitle: string | undefined,
    info: string | undefined,
    content: string | undefined,
    linkContent: string | undefined,
    href: string | undefined
}

interface last_created_or_modified {
    case: "이메일 주소" | "비밀번호" | ""
    type: "생성일자" | "수정일자" | "",
    date: string
}
export default function MainContent({
    user
    }:{
    user: string
}) {
    const [last_created_or_modified, setLast_created_or_modified ] = useState<last_created_or_modified>({
        case: "",
        type: "",
        date: ""
    });
    const [emailAddress, setEmailAddress] = useState<string>("")

    let contentArray: contentType[] = [
        {
            id: 1,
            mainTitle: "비밀번호",
            infoTitle: "비밀번호는 타인이 유추하기 어렵도록 구성해야 하며 정기적인 수정이 권장됩니다.",
            info: undefined,
            content: undefined,
            linkContent: "지금 수정하기..",
            href: "../confirmation/" + user + "/modification/account/password"
        },
        {
            id: 2,
            mainTitle: "이메일 주소",
            infoTitle: "현재 확인된 주소..",
            info: emailAddress,
            content: "이메일 주소는 초기 등록, 수정 시 인증번호를 통한 확인이 요구됩니다. ",
            linkContent: "지금 수정하기..",
            href: "../confirmation/" + user + "/modification/account/email"
        },
        {
            id: 3,
            mainTitle: "계정 삭제",
            infoTitle: "계정 삭제는 추가적인 본인 확인을 요구하며 요청 이후 취소할 수 없습니다.",
            info: undefined,
            content: undefined,
            linkContent: "본인 확인 후 삭제 페이지로 이동..",
            href: "../confirmation/" + user + "/deletion/account/all"
        },
        {
            id: 4,
            mainTitle: "최근의 계정정보 " + last_created_or_modified.type,
            infoTitle: (last_created_or_modified.case.length > 1 ? "최근 수정됨: " + "\"" + last_created_or_modified.case + "\"" : "계정 생성일(년,월,일)"),
            info: "20" + last_created_or_modified.date,
            content: undefined,
            linkContent: undefined,
            href: ""
        }
    ]

    useEffect(() => { // PartialDetailStore.getState().partialDetail
        let email =  sessionStorage.getItem("email");
        let created_date = sessionStorage.getItem("created_date");
        let last_modified = sessionStorage.getItem("last_modified");
        setEmailAddress(email)
        if (last_modified != "null") { // 최종 수정일자 존재 (sessionStorage 저장시 문자열 자체로 저장되므로 다음과 같이 문자열 그대로 null 여부를 확인해야 한다)
            if (last_modified.slice(15, 17) == "00") { // 비밀번호 수정일
                setLast_created_or_modified({
                    case: "비밀번호",
                    type: "수정일자",
                    date: last_modified.slice(0, 8)
                })
            } else if (last_modified.slice(15, 17) == "01") { // 이메일 주소 수정알
                setLast_created_or_modified({
                    case: "이메일 주소",
                    type: "수정일자",
                    date: last_modified.slice(0, 8)
                })
            }
        } else { // 최종 수정일자가 존재하지 않음 (생성 후 수정되지 않은 상태)
            setLast_created_or_modified({
                case: "",
                type: "생성일자",
                date: created_date.slice(0, 8)
            })
        }
    }, []);
    return (
        <>
            {contentArray.map((content) => (
                <Content key={content.id} contents={content}/>
            ))}
        </>
    )
}

function Content({
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