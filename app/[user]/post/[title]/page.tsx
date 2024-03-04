import Layout from "../../../../components/layout/layout";
import PostDetail from "../../../../components/detail/postDetail";

export default function Specific({ params }: { params: { title: string }}) {
    // todo layoutFooter 컴포넌트가 언마운트 되지 않는 현상 해결할 것
    return (
        <Layout customForRoot={""}>
            <PostDetail title={params.title}/>
        </Layout>
    )
}