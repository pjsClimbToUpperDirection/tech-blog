import Layout from "../../../../../components/layout/layout";
import EmailAddressModificationForm from "../../../../../components/submit/emailAddressModificationForm"
import React from "react";

export default function ModifyEmailAddress() {
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    let urlForAuthNumber = process.env.BACKEND_ORIGIN + "/api/v1/account-api/modification/email/request"
    let urlForMainRequest = process.env.BACKEND_ORIGIN + "/api/v1/account-api/modification/email/verification"
    return (
        <Layout customForRoot={""}>
            <EmailAddressModificationForm
                requestUrl={urlForAuthNumber}
                verificationUrl={urlForMainRequest}/>
        </Layout>
    )
}