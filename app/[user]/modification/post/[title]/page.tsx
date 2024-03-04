import Layout from "../../../../../components/layout/layout";
import PostModificationForm from "../../../../../components/submit/post/postModificationForm";

export default function ModifyPost({ params }:{ params: { title: string }}) {
    return (
        <Layout customForRoot={""}>
            <PostModificationForm title={params.title}/>
        </Layout>
    )
}