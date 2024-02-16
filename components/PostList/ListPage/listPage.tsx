import Detail from "../detail/detail";

export default function listPage({
    PostList,
    params
    } : {
    PostList: { id: number, writer: string, email: string, title: string, content: string, created_date: string, updated_date: string | null }[],
    params: { user: string },
    }) {
    return (
        <>
            <div className={"w-full h-full grid xl:grid-cols-6 max-2xl:justify-items-center"}>
                <div
                    className={"col-span-6 h-fit grid grid-cols-1 md:grid-cols-2 grid-rows-4 py-[5px] max-lg:w-full max-2xl:w-[1024px]  2xl:col-start-2 2xl:col-end-6"}>
                    {PostList.map((eachPost) => (
                        <Detail key={eachPost.id} postInfo={eachPost} maxTitleLength={10} maxContentLength={25} user={params.user}/>
                    ))}
                </div>
            </div>
        </>
    )
}