import Layout from "../../../../../components/layout/layout";
import PostModificationForm from "../../../../../components/submit/post/postModificationForm";

export default function ModifyPost({ params }:{ params: { user: string, title: string }}) {
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    const modificationUrl = "http://localhost:1701/api/v1/patch-api/updatePost"
    return (
        <Layout customForRoot={""}>
            <PostModificationForm
                writer={params.user}
                title={params.title}
                modificationUrl={modificationUrl}/>
        </Layout>
    )
}