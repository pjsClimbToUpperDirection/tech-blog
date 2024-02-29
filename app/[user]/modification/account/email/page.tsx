import Layout from "../../../../../components/layout/layout";
import EmailAddressModificationForm from "../../../../../components/submit/emailAddressModificationForm"
import React from "react";

export default function ModifyEmailAddress() {
    let requested = 0
    return (
        <Layout customForRoot={""}>
            <EmailAddressModificationForm/>
        </Layout>
    )
}