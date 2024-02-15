import Link from "next/link";

export default function rootButton({ href }:{ href: string }) {
    return (
        <Link href={href} className={"w-[230px] h-[40px] grid place-items-center border-2 border-rose-500 rounded "}>
            <p className={"text-slate-300"}>눌러서 로그인</p>
        </Link>
    )
}