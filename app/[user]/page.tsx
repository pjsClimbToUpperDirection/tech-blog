import Detail from "../../components/PostList/detail/detail"

export default function UserPage(props) {
    // key값 명시 필요
    const PostList = [
        { id: 1, writer: "me", email: "who@naver.com", title: "first", content: "somethingOne", created_date: "24-02-07", updated_date: null},
        { id: 2, writer: "me2", email: "who@naver.com", title: "first", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 3, writer: "me3", email: "who@naver.com", title: "first", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 4, writer: "me", email: "who@naver.com", title: "first", content: "something", created_date: "24-02-07", updated_date: null},
        { id: 5, writer: "me", email: "who@naver.com", title: "first", content: "something", created_date: "24-02-07", updated_date: null},
    ]
    return (
        <>
          <div className={"w-full h-[1110px]"}>
              <div className={"w-full h-[1060px] grid grid-cols-6"}>
                  <div className={"col-start-2 col-end-6 h-[1060px] grid grid-rows-5 py-[5px]"}>
                      {PostList.map((eachPost) => (
                          <Detail postInfo={eachPost} key={eachPost.id}/>
                      ))}
                  </div>
              </div>
              <div className={"w-full h-[50px]"}>다음 항목</div>
          </div>
        </>
    )
}