import Link from "next/link";

export default function summary({
    postInfo,
    maxTitleLength,
    maxContentLength,
    user
    }: {
    postInfo: { post_id: number, writer: string, title: string, "content": string, "created_date": string, "updated_date": string | null},
    maxTitleLength: number,
    maxContentLength: number,
    user: string,
}) {
    return (
        <div
            className={"col-span-1 p-[5px] m-[5px] border-[5px] border-gray-600 rounded-3xl h-[180px]"}>
            <Link href={`/${user}/detail/post/${postInfo.title}`} prefetch={false} className={"px-10 grid grid-rows-5"}>
                <h2 className={"row-span-1 w-fit grid justify-items-start m-[2px] border-b-[2px] border-gray-600 text-gray-200 px-[30px]"}
                    id={postInfo.post_id.toString()}>
                    {postInfo.title.length > maxTitleLength ? (
                        <p>{postInfo.title.substring(0, maxTitleLength)}...</p>
                    ):(
                        <p>{postInfo.title}</p>
                    )}
                </h2>
                <div id={"container"} className={"row-span-4 overflow-hidden text-gray-200"}>
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