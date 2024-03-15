"use client"

import {useEffect} from "react";
import store from "../../../tokenStorage/redux/store";
import {redirect} from "next/navigation";

export default function Logout() {
    useEffect(() => {
        store.dispatch({
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