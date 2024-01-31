import Link from "next/link";
import LayoutButton from "./Button/layoutButton";
import React from "react";

export default ({navLinks}: {
    navLinks: {id: number, list: string, href: string}[]
}) => {
    return (
        <div className={"grid justify-items-center grid-cols-7 bg-slate-100 border-black sticky top-0"}>
            <div className={"p-[5px] w-full col-start-2 col-end-7"}>
                <div className={"w-full grid grid-cols-5"}>
                    <div className={"text-black col-span-2 grid justify-items-center p-[5px]"}>
                        <Link href="/" className={"text-[30px] font-bold"}>
                            Tech blog
                        </Link>
                    </div>
                    <div className={"col-span-3 p-[5px]"}>
                        <div className={"px-[50px] py-[10px]"}>
                            <ul className={"flex flex-row-reverse justify-start"}>
                                {navLinks.map((each) => (
                                    <LayoutButton key={each.id} customClass={"p-[2px] px-[10px] min-w-[42px]"}
                                                  href={each.href}>{each.list}</LayoutButton>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}