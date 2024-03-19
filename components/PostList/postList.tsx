"use client"

import Summary from "./summary/summary";
import React, {useEffect, useState} from "react";
import TokenStore from "../../tokenStorage/redux/store";
import LastChapterStatusStore from "../../postStorage/chapter/redux/store";
import PostListStatusStore from "../../postStorage/list/redux/store";
import {useRouter} from "next/navigation";

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
    const [postsInCurrentPage, setPostsInCurrentPage] = useState<postFormat[]>(undefined)
    const router = useRouter();

    async function getPostList() {
        let postList: postFormat[];
        let response= await fetch(postListUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": TokenStore.getState().value,
                "refresh": sessionStorage.getItem("RefreshToken")
            }
        })
        if (response.status == 200) {
            response.json().then((data: postFormat[]) => {
                PostListStatusStore.dispatch({
                    type: 'set/postListStatusStore',
                    payload: data
                })
                postList = data
                setPostsInCurrentPage(postList.slice((page - 1) * maxlengthInOnePage, (page) * maxlengthInOnePage))
            })
        } else if (response.status == 401) {
            router.push("/signin") // 브라우저 history stack 에 url 기록을 남겨서 로그인 성공 시 본 페이지로 돌아올수 있도록 한다
        } else {
            alert("서버 내부 오류")
        }
    }
    useEffect(() => {
        // 랜더링 될 시 게시글 목록 요청하여 변수에 저장, hook 상태 변경
        getPostList();
    }, []);
    useEffect(() => { // 페이지 이동 시마다 마지막 페이지인지 여부를 확인하는 함수 호출
        if (postsInCurrentPage != undefined) { // 초기 랜더링 직후 undefined 상태에서는 실행되지 않음
            IsLastPage(postsInCurrentPage)
        }
    }, [postsInCurrentPage]);

    function IsLastPage(PostsInCurrentPage: postFormat[]) {
        //lastChapterContainer = document.getElementById("lastChapterStatus") as HTMLInputElement // layoutFooter 와 공유
        if (PostsInCurrentPage.length < maxlengthInOnePage) { // 마지막 장일 경우 true 반환
            LastChapterStatusStore.dispatch({
                type: 'set/lastChapterStatusStore',
                payload: 1
            })
        } else {
            LastChapterStatusStore.dispatch({
                type: 'set/lastChapterStatusStore',
                payload: 0
            })
        }
    }
    // 초기 랜더링 후 data fetch 성공 시 목록 출력
    // 한 페이지에 maxlengthInOnePage 값만큼의 요약 출력
    return (
        <>
            <div className={"grid grid-rows-9"}>
                {postsInCurrentPage != undefined ? postsInCurrentPage.map((eachPost) => (
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