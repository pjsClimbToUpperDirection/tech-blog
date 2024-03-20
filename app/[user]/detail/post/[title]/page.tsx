import Layout from "../../../../../components/layout/layout";
import PostDetail from "../../../../../components/detail/postDetail";

export default function PostDetailPage({ params }:{ params: { user: string, title: string } }) {
    const deletionUrl = process.env.BACKEND_ORIGIN + "/api/v1/delete-api/deletePost"
    return (
        <Layout customForRoot={""}>
            <PostDetail
                writer={params.user}
                title={params.title}
                requestUrl={deletionUrl}/>
        </Layout>
    )
}