"use client"

import React, {useEffect, useState} from "react";
import PostListStatusStore from "../../postStorage/list/redux/store";
import Link from "next/link";
import Full_height_Form from "../modification/full_height_Form";
import TokenStore from "../../tokenStorage/redux/store";
import {useRouter} from "next/navigation";
import InputElementForDisplay from "../input/inputElementForDisplay";

interface postFormat {
    post_id: number,
    writer: string,
    title: string,
    content: string,
    created_date: string,
    updated_date: string
}

export default function PostDetail({
    writer,
    title,
    requestUrl
    }:{
    writer: string,
    title: string,
    requestUrl: string
}) {
    const [renderedPost, setRenderedPost] = useState<postFormat>(undefined);
    const router = useRouter();

    function getPostList() {
        const Posts: postFormat[] = PostListStatusStore.getState().value
        if (Posts != undefined) {
            setRenderedPost(Posts.find((post) => post.title == title))
        }
    }

    async function generateRequest(e) {
        e.preventDefault();
        if (window.confirm("게시글을 삭제하시겠습니까?")) {
            let response= await fetch(requestUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": TokenStore.getState().value,
                    "refresh": sessionStorage.getItem("RefreshToken")
                },
                body: JSON.stringify({
                    title: title
                }),
            })
            if (response.status == 204) {
                router.replace(`/${writer}/main/1`);
            } else {
                alert("게시글 삭제 요청이 거부되었습니다, 문제가 지속될 시 재 로그인 후 다시 시도하십시요.")
            }
        }
    }

    useEffect(() => {
        getPostList()
    }, []);
    return (
        <div className={"w-full text-gray-200 max-sm:px-3"}>
            {renderedPost != undefined ?
                <Full_height_Form handleSubmit={generateRequest}>
                    <div className={"h-[90px] p-2 border-b-2 border-gray-200 grid content-end justify-center"}>
                        <InputElementForDisplay displayedValue={title} alertWithFog={undefined} custom={"w-0 h-0"}/>
                        <h2 className={"text-[28px] font-bold"}>{title.length > 20 ? (
                            <p>{title.substring(0, 20)}...</p>
                        ) : (
                            <p>{title}</p>
                        )}</h2>
                    </div>
                    <div className={"h-[40px] my-[5px]"}>
                        <div className={""}>
                            최종 작성일: {renderedPost.updated_date != null ? renderedPost.updated_date : renderedPost.created_date}
                        </div>
                        <div className={"text-blue-200"}>
                            <Link href={`/${writer}/modification/post/${title}`} prefetch={false}>눌러서 게시글을 수정...</Link>
                        </div>
                    </div>
                    <div className={"flex-auto h-full py-4"}>
                        <textarea readOnly={true} value={renderedPost.content} className={"w-full h-full bg-black text-gray-200 outline-0 resize-none"}/>
                    </div>
                    <div className={"h-[60px] m-2 grid content-center"}>
                        <input type={"submit"} value={"눌러서 게시글 삭제"} className={"text-orange-500 border-2 border-slate-700"}/>
                    </div>
                </Full_height_Form>
                :
                <></>
            }
        </div>
    )
}