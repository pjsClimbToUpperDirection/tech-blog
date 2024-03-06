"use client"

import Link from "next/link";
import close from "../close";

// 사용자의 암호, 이메일 주소에 관한 정보 노출, 수정 페이지 이동 기능
export default function MenuBarExtendedArea({
    title,
    href
    } : {
    title: string
    href: string
}) {
    // todo 컴포넌트 종류에 따라 다른 요소가 들어갈 여지 고려
    return (
        <div className={"w-full h-[100px] border-b-2 border-gray-600 grid grid-rows-3 text-white"}>
            <div className={"pl-[22px] row-span-1 grid content-center"}>
                <Link href={href} className={""} onClick={close}>{title}</Link>
            </div>
            <div className={"row-span-2 px-[30px]"}>
                {title.slice(9) == "암호" ?
                    <div className={"w-full h-full"}>
                        <div className={"w-fit h-full"}>
                            <p>
                                example@example.com
                            </p>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={"w-fit h-full"}>
                            <p>
                                최근 수정일
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}