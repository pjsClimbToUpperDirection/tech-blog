"use client"

import {useEffect} from "react";
import TokenStore from "../../../tokenStorage/redux/store";
import {redirect} from "next/navigation";

export default function Logout() {
    useEffect(() => {
        TokenStore.dispatch({
            type: "set/accessToken",
            payload: ""
        })
        sessionStorage.removeItem("AccessToken")
        sessionStorage.removeItem("RefreshToken")
        redirect("/")
    }, []);
    return (
        <></>
    )
}