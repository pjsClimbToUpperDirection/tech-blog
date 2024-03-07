import Layout from "../../../../components/layout/layout";
import PasswordModificationForm from "../../../../components/submit/passwordModificationForm";
import React from "react";

export default function ModifyPassword() {
    // todo 기존 비밀번호를 입력받는 페이지로 redirect
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    return (
        <Layout customForRoot={""}>
            <PasswordModificationForm/>
        </Layout>
    )
}