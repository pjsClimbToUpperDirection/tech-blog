import Layout from "../../../../components/layout/layout";
import EmailAddressModificationForm from "../../../../components/submit/emailAddressModificationForm"
import React from "react";

export default function ModifyEmailAddress() {
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    return (
        <Layout customForRoot={""}>
            <EmailAddressModificationForm/>
        </Layout>
    )
}