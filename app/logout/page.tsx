"use client"

import {useEffect} from "react";
import {LogoutActionTrigger} from "../../function/logIn_out/responseHandler";

export default function Logout() {
    useEffect(() => {
        LogoutActionTrigger()
    }, []);
    return (
        <></>
    )
}