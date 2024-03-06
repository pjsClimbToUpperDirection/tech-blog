import Layout from "../../../../components/layout/layout";
import PostDetail from "../../../../components/detail/postDetail";

export default function Specific({ params }: { params: { title: string }}) {
    return (
        <Layout customForRoot={""}>
            <PostDetail title={params.title}/>
        </Layout>
    )
}