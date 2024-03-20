import Layout from "../../../../../components/layout/layout";
import PasswordModificationForm from "../../../../../components/submit/passwordModificationForm";
import React from "react";

export default function ModifyPassword() {
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    let url = process.env.BACKEND_ORIGIN + "/api/v1/account-api/modification/password/request"
    return (
        <Layout customForRoot={""}>
            <PasswordModificationForm url={url} method={"PATCH"}/>
        </Layout>
    )
}