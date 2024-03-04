import Layout from "../../../../../components/layout/layout";
import EmailAddressModificationForm from "../../../../../components/submit/emailAddressModificationForm"
import React from "react";

export default function ModifyEmailAddress() {
    return (
        <Layout customForRoot={""}>
            <EmailAddressModificationForm/>
        </Layout>
    )
}