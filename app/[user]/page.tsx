import ListPage from "../../components/PostList/ListPage/listPage"

export default function UserPage({ params }: { params: { user: string} }) {

    const PostList = [
        { id: 1, writer: "me1", email: "who@naver.com", title: "first123456789012345678", content: "somethingOne", created_date: "24-02-07", updated_date: null},
        { id: 2, writer: "me2", email: "who@naver.com", title: "second", content: "모든 게시글이 로드될 시 게시글 수가 많다면 성능 문제가 발생할수 있으므로 한번에 모든 게시글을 출력하는 대신 특정 개수로 쪼개어 출력하도록 구현", created_date: "24-02-07", updated_date: null},
        { id: 3, writer: "me3", email: "who@naver.com", title: "third", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 4, writer: "me4", email: "who@naver.com", title: "four", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 5, writer: "me5", email: "who@naver.com", title: "five", content: "something", created_date: "24-02-07", updated_date: null},
    ]
    return (
        <div className={"w-full flex flex-col"}>
            <ListPage PostList={PostList} params={params}/>
        </div>
)
}