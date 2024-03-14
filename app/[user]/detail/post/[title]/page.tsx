import Layout from "../../../../../components/layout/layout";

// todo 클라이언트 랜더링 사용하여 useEffect 영역에서 데이터 가져오기, 401 반환시 리다이렉션
export default function PostDetail({ params }:{ params: { title: string} }) {
    const PostList = [
        { id: 1, writer: "me1", email: "who@naver.com", title: "first123456789012345678", content: "somethingOne", created_date: "24-02-07", updated_date: null},
        { id: 2, writer: "me2", email: "who@naver.com", title: "second", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 3, writer: "me3", email: "who@naver.com", title: "third", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 4, writer: "me4", email: "who@naver.com", title: "four", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 5, writer: "me5", email: "who@naver.com", title: "five", content: "something", created_date: "24-02-07", updated_date: null},
    ]

    const thisIs = PostList.find(post => post.title == params.title)
    return (
        <Layout customForRoot={""}>
            <div className={"w-full text-gray-200"}>
                <div className={"h-[90px] p-2 border-b-2 border-gray-200 grid content-end justify-center"}>
                    <h2 className={"text-[28px] font-bold"}>{params.title.length > 20 ? (
                        <p>{params.title.substring(0, 20)}...</p>
                    ) : (
                        <p>{params.title}</p>
                    )}</h2>
                </div>
                <div className={"h-[40px] my-[5px] flex items-center"}>
                    <p className={"border-b-2 border-gray-200"}>
                        최종 작성일: {thisIs.updated_date != null ? thisIs.updated_date : thisIs.created_date}
                    </p>
                </div>
                <div className={"flex-auto h-full my-[10px]"}>
                    <p>
                        {thisIs.content}
                    </p>
                </div>
            </div>
        </Layout>
    )
}