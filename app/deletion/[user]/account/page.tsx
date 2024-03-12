import React from "react";
import Layout from "../../../../components/layout/layout";
import AccountDeletionForm from "../../../../components/submit/accountDeletionForm";

export default function AccountDeletionPage({
    params
    }:{
    params: { user: string }
    }) {
    let url = "http://localhost:1701/api/v1/account-api/deletion/verification"
    // todo 계정 삭제 시 요청 헤더 내부에 로그인 시 발급받은 jwt, 비밀번호 재입력을 통해 받은 임시 토큰을 헤더에 담아 보낸다 (본문은 비어있음)
    return (
        <Layout customForRoot={""}>
            <AccountDeletionForm user={params.user} requestUrl={url} method={"DELETE"}/>
        </Layout>
    )
}