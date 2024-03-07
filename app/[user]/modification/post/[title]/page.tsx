import Layout from "../../../../../components/layout/layout";
import PostModificationForm from "../../../../../components/submit/post/postModificationForm";

export default function ModifyPost({ params }:{ params: { title: string }}) {
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    return (
        <Layout customForRoot={""}>
            <PostModificationForm title={params.title}/>
        </Layout>
    )
}