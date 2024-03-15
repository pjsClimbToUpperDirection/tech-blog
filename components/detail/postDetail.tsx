"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import PostListStatusStore from "../../postStorage/list/redux/store";
import Link from "next/link";

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
    title
    }:{
    writer: string,
    title: string,
}) {
    const [renderedPost, setRenderedPost] = useState<postFormat>(undefined);
    const router = useRouter();
    function getPostList() {
        const Posts: postFormat[] = PostListStatusStore.getState().value
        console.log(Posts)
        // todo 게시글 상태를 불러와서 그중 제목에 대응하는 게시글을 랜더링
        if (Posts != undefined) {
            setRenderedPost(Posts.find((post) => post.title == title))
        }
    }

    useEffect(() => {
        getPostList()
    }, []);
    return (
        <div className={"w-full text-gray-200"}>
            {renderedPost != undefined ?
                <>
                    <div className={"h-[90px] p-2 border-b-2 border-gray-200 grid content-end justify-center"}>
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
                        <p>
                            {renderedPost.content}
                        </p>
                    </div>
                </>
                :
                <></>
            }
        </div>
    )
}