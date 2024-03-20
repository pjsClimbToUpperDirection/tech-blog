import React from "react";
import Layout from "../../../../../components/layout/layout";
import AccountDeletionForm from "../../../../../components/submit/accountDeletionForm";

export default function AccountDeletionPage({
    params
    }:{
    params: { user: string }
    }) {
    let url = process.env.BACKEND_ORIGIN + "/api/v1/account-api/deletion/request"
    return (
        <Layout customForRoot={""}>
            <AccountDeletionForm
                user={params.user}
                requestUrl={url}/>
        </Layout>
    )
}