"use client"

import {useEffect} from "react";
import store from "../redux/store";
import {redirect} from "next/navigation";
import {router} from "next/client";

// SPA 에 맞추어 설계되었으므로 새 탭을 띄우거나 브라우저를 닫은 후 재방문할 시 로그인이 유지되지 않음
export default function TokenContainer() {
    useEffect(() => {
        window.addEventListener("beforeunload", (event) => {
            event.returnValue = '';
            sessionStorage.setItem("AccessToken", store.getState().value); // 새로고침 시 accessToken 을 세션 스토리지에 저장
        })
        let AccessToken: string = sessionStorage.getItem("AccessToken");
        if (AccessToken.length > 1) {
            console.log("thereIs")
            store.dispatch({
                type: "set/accessToken",
                payload: AccessToken
            })
            sessionStorage.removeItem("AccessToken") // 랜더링 후 세션 스토리지의 토큰 제거
        } else {
            // 모든 요청에 대하여 메인 페이지로 리다이렉트
            // 인위적으로 url 을 작성하여 페이지가 리 랜더링 될 경우 작동 가능
            console.log("redirect")
        }
    }, []);
    return (
        <></>
    )
}