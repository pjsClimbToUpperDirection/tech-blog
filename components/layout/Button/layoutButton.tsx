import Link from "next/link";

export default function layoutButton({children, customClass, href}: {children: string, customClass: string, href: string}) {

    return(
        <li className={customClass}>
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}