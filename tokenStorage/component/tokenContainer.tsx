"use client"

import {useEffect} from "react";
import TokenStore from "../redux/store";
import {useRouter} from "next/navigation";

// SPA 에 맞추어 설계되었으므로 새 탭을 띄우거나 브라우저를 닫은 후 재방문할 시 로그인이 유지되지 않음
export default function TokenContainer() {
    let done: boolean = false; // 중복 실행 방지
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("beforeunload", (event) => {
            event.returnValue = '';
            sessionStorage.setItem("AccessToken", TokenStore.getState().value); // 새로고침 시 accessToken 을 세션 스토리지에 저장
        })
        let AccessToken: string = sessionStorage.getItem("AccessToken");
        if (!done) {
            if (AccessToken != null && AccessToken.length > 20) {
                TokenStore.dispatch({
                    type: "set/accessToken",
                    payload: AccessToken
                })
                sessionStorage.removeItem("AccessToken") // 랜더링 후 세션 스토리지의 토큰 제거
            } else {
                // 로그인하지 않은 상태(accessToken 을 찾을 수 없는 경우) 일 시 모든 요청에 대하여 메인 페이지로 리다이렉트
                // 인위적으로 url 을 작성하여 페이지가 리 랜더링 될 경우 작동 가능
                router.replace("/")
            }
            done = true
        }
    }, []);
    return (
        <></>
    )
}