"use client"

import Summary from "./summary/summary";
import React, {useEffect} from "react";

export default function PostList({
    page,
    user,
    maxlengthInOnePage // 한 페이지에 출력될 최대 요약 컨테이너 개수
    }:{
    page: number,
    user: string,
    maxlengthInOnePage: number
}) {
    let lastChapterContainer: HTMLInputElement;
    useEffect(() => {
        lastChapterContainer = document.getElementById("lastChapterStatus") as HTMLInputElement
        // 랜더링 될 시 게시글 목록 요청하여 변수에 저장, hook 상태 변경
        // todo 401 응답 시 로그인 페이지로 리다이렉션
    }, []);
    useEffect(() => {
        IsLastPage()
    }, [page]);
    function IsLastPage() {
        if (PostsInCurrentPage.length < maxlengthInOnePage) { // 마지막 장
            lastChapterContainer.value = "1"
        } else {
            lastChapterContainer.value = "0"
        }
    }
    let postList: {
        id: number,
        writer: string,
        email: string,
        title: string,
        content: string,
        created_date: string,
        updated_date: string | null
    }[]
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
    ]
    let PostsInCurrentPage = postList.slice((page - 1) * maxlengthInOnePage, (page) * maxlengthInOnePage);
    // 한 페이지에 7개의 요약 출력
    return (
        <>
            <div className={"grid grid-rows-11"}>
                {PostsInCurrentPage.map((eachPost) => (
                    <Summary key={eachPost.id} postInfo={eachPost} maxTitleLength={10} maxContentLength={25}
                             user={user}/>
                ))}
            </div>
            <input type={"hidden"} id={"lastChapterStatus"}/>
        </>
    )
}