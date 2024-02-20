export default function ({ params }: { params: { title: string }}) {
    // 사용자 게시글 목록에서 데이터를 fetch 한 이후 기본적으로 캐시되므로 캐시된 데이터를 전부 호출한 뒤 조건문으로 걸러내는 전제로 진행
    // 동적 경로의 값과 제목이 항상 같다는 전제로 진행
    const PostList = [
        { id: 1, writer: "me1", email: "who@naver.com", title: "first123456789012345678", content: "somethingOne", created_date: "24-02-07", updated_date: null},
        { id: 2, writer: "me2", email: "who@naver.com", title: "second", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 3, writer: "me3", email: "who@naver.com", title: "third", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 4, writer: "me4", email: "who@naver.com", title: "four", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 5, writer: "me5", email: "who@naver.com", title: "five", content: "something", created_date: "24-02-07", updated_date: null},
    ]

    const thisIs = PostList.find(post => post.title == params.title)
    return (
        <div className={"text-gray-200 absolute top-[70px] w-full h-[2100px] flex flex-col flex-auto bg-black z-10"}>
            <div className={"w-full grid grid-cols-6"}>
                <div className={"col-start-2 col-end-6"}>
                    <div className={"h-[90px] p-2 border-b-2 border-gray-200 grid content-end justify-center"}>
                        <h2 className={"text-[28px] font-bold"}>{params.title.length > 20 ? (
                                <p>{params.title.substring(0, 20)}...</p>
                            ):(
                                <p>{params.title}</p>
                            )}</h2>
                    </div>
                    <div className={"h-[40px] my-[5px] flex items-center"}>
                        <p className={"border-b-2 border-gray-200"}>
                            최종 작성일: {thisIs.updated_date != null ? thisIs.updated_date : thisIs.created_date}
                        </p>
                    </div>
                    <div className={"flex-auto min-h-[670px] my-[10px]"}>
                        <p>
                            {thisIs.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}