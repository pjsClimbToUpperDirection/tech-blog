import Link from "next/link";

export default function layoutButton({children, customClass, href}: {children: string, customClass: string, href: string}) {

    return(
        <Link href={href} className={customClass}>
            {children}
        </Link>
    )
}