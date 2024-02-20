import Detail from "../../components/PostList/detail/detail";

export default function UserPage({ params }: { params: { user: string} }) {

    const PostList = [
        { id: 1, writer: "me1", email: "who@naver.com", title: "first123456789012345678", content: "somethingOne", created_date: "24-02-07", updated_date: null},
        { id: 2, writer: "me2", email: "who@naver.com", title: "second", content: "모든 게시글이 로드될 시 게시글 수가 많다면 성능 문제가 발생할수 있으므로 한번에 모든 게시글을 출력하는 대신 특정 개수로 쪼개어 출력하도록 구현", created_date: "24-02-07", updated_date: null},
        { id: 3, writer: "me3", email: "who@naver.com", title: "third", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 4, writer: "me4", email: "who@naver.com", title: "four", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 5, writer: "me5", email: "who@naver.com", title: "five", content: "something", created_date: "24-02-07", updated_date: null},
    ]
    return (
        <div className={"absolute top-[70px] w-full h-[2100px] flex flex-col flex-auto"}>
            <div className={"w-full h-full flex justify-center"}>
                <div
                    className={"max-sm:max-w-[400px] h-fit grid grid-cols-1 grid-rows-11 py-[5px]  sm:w-[400px] lg:w-[500px] 2xl:col-start-2 2xl:col-end-6"}>
                    {PostList.map((eachPost) => (
                        <Detail key={eachPost.id} postInfo={eachPost} maxTitleLength={10} maxContentLength={25}
                                user={params.user}/>
                    ))}
                </div>
            </div>
        </div>
    )
}