// 클라이언트 요소가 다수 사용된 관계로 클라이언트 컴포넌트, 혹은 실행 시점에서 브라우저 내 요소인 경우 사용 가능

import {tokenWithSomeUserDetails} from "../../interface/ForSignIn";
import TokenStore from "../../tokenStorage/redux/store";
import {redirect} from "next/navigation";

// login 시 응답 처리
export default function responseHandler(response: Response) {
    response.json().then((data: tokenWithSomeUserDetails) => {
        TokenStore.dispatch({
            type: "set/accessToken",
            payload: data.accessToken
        })
        sessionStorage.setItem("RefreshToken", data.refreshToken)

        sessionStorage.setItem("email", data.email)
        sessionStorage.setItem("created_date", data.created_date)
        sessionStorage.setItem("last_modified", data.last_modified)
    })
}

// 로그아웃에 필요한 동작 촉발
export function LogoutActionTrigger() {
    TokenStore.dispatch({
        type: "set/accessToken",
        payload: ""
    })
    sessionStorage.removeItem("RefreshToken")

    sessionStorage.removeItem("email")
    sessionStorage.removeItem("created_date")
    sessionStorage.removeItem("last_modified")
    redirect("/")
}