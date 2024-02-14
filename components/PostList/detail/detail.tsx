import Link from "next/link";

export default function Detail({
    postInfo,
    maxTitleLength,
    maxContentLength,
    user
    }: {
    postInfo: { id: number, writer: string, email: string, title: string, "content": string, "created_date": string, "updated_date": string | null},
    maxTitleLength: number,
    maxContentLength: number,
    user: string,
    }) {
    return (
        <div
            className={"col-span-1 p-[5px] m-[5px] border-[5px] border-gray-200 border-r-gray-200 rounded-3xl h-[180px]"}>
            <Link href={`/${user}/${postInfo.title}`} prefetch={false} className={"px-10 grid grid-rows-5"}>
                <h2 className={"row-span-1 grid justify-items-center m-[2px] border-b-[4px] border-fuchsia-800"}
                    id={postInfo.id.toString()}>
                    {postInfo.title.length > maxTitleLength ? (
                        <p>{postInfo.title.substring(0, maxTitleLength)}...</p>
                    ):(
                        <p>{postInfo.title}</p>
                    )}
                </h2>
                <div id={"container"} className={"row-span-4 overflow-hidden"}>
                    {postInfo.content.length > maxContentLength ? (
                        <p>{postInfo.content.substring(0, maxContentLength)}.....</p>
                    ) : (
                        <p>{postInfo.content}</p>
                    )}
                </div>
            </Link>
        </div>
    )
}