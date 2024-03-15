"use client"

import Summary from "./summary/summary";
import React, {useEffect, useState} from "react";
import store from "../../tokenStorage/redux/store";

interface postFormat {
    post_id: number,
    writer: string,
    title: string,
    content: string,
    created_date: string,
    updated_date: string
}

export default function PostList({
    page,
    user,
    maxlengthInOnePage, // 한 페이지에 출력될 최대 요약 컨테이너 개수.
    postListUrl
    }:{
    page: number,
    user: string,
    maxlengthInOnePage: number,
    postListUrl: string
}) {
    let lastChapterContainer: HTMLInputElement;
    let postList: postFormat[];
    //let postsInCurrentPage: postFormat[]

    const [postsInCurrentPage, setPostsInCurrentPage] = useState<postFormat[]>(undefined)
    const [posts, setPosts] = useState<postFormat[]>(undefined)

    async function getPostList() {
        let response= await fetch(postListUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": store.getState().value,
                "refresh": sessionStorage.getItem("RefreshToken")
            }
        })
        if (response.status == 200) {
            // todo 리다이렉션 로직 구현
            response.json().then((data: postFormat[]) => {
                postList = data
                setPostsInCurrentPage(postList.slice((page - 1) * maxlengthInOnePage, (page) * maxlengthInOnePage))
                setPosts(postsInCurrentPage)
            })
        } else if (response.status == 401) {
            console.log("401") // todo 401 응답 시 로그인 페이지로 리다이렉션
        } else {
            console.log("other")
        }
    }
    useEffect(() => {
        // 랜더링 될 시 게시글 목록 요청하여 변수에 저장, hook 상태 변경
        getPostList();
    }, []);
    useEffect(() => { // 페이지 이동 시마다 마지막 페이지인지 여부를 확인하는 함수 호출
        if (postsInCurrentPage != undefined) {
            console.log(postsInCurrentPage)
            IsLastPage(postsInCurrentPage)
        }
    }, [postsInCurrentPage]);

    function IsLastPage(PostsInCurrentPage: postFormat[]) {
        lastChapterContainer = document.getElementById("lastChapterStatus") as HTMLInputElement // layoutFooter 와 공유
        if (PostsInCurrentPage.length < maxlengthInOnePage) { // 마지막 장
            lastChapterContainer.value = "1"
        } else {
            lastChapterContainer.value = "0"
        }
    }
    /*
    useEffect(() => { // 페이지 이동 시마다 마지막 페이지인지 여부를 확인하는 함수 호출
        IsLastPage(postsInCurrentPage)
    }, [page]);
    postList = [
        {
            id: 1,
            writer: "me1",
            email: "who@naver.com",
            title: "first123456789012345678",
            content: "somethingOne",
            created_date: "24-02-07",
            updated_date: null
        },
        {
            id: 2,
            writer: "me2",
            email: "who@naver.com",
            title: "second",
            content: "모든 게시글이 로드될 시 게시글 수가 많다면 성능 문제가 발생할수 있으므로 한번에 모든 게시글을 출력하는 대신 특정 개수로 쪼개어 출력하도록 구현",
            created_date: "24-02-07",
            updated_date: null
        },
        {
            id: 3,
            writer: "me3",
            email: "who@naver.com",
            title: "third",
            content: "something",
            created_date: "24-02-07",
            updated_date: null
        },
        {
            id: 4,
            writer: "me4",
            email: "who@naver.com",
            title: "four",
            content: "something",
            created_date: "24-02-07",
            updated_date: null
        },
        {
            id: 5,
            writer: "me5",
            email: "who@naver.com",
            title: "five",
            content: "something",
            created_date: "24-02-07",
            updated_date: null
        },
    ]*/
    // 한 페이지에 7개의 요약 출력
    // 초기 랜더링 후 data fetch 성공 시 목록 출력
    return (
        <>
            <div className={"grid grid-rows-11"}>
                {posts != undefined ? posts.map((eachPost) => (
                    <Summary key={eachPost.post_id} postInfo={eachPost} maxTitleLength={10} maxContentLength={25}
                             user={user}/>
                ))
                :
                <></>}
            </div>
            <input type={"hidden"} id={"lastChapterStatus"}/>
        </>
    )
}