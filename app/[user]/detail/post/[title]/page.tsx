import Layout from "../../../../../components/layout/layout";
import PostDetail from "../../../../../components/detail/postDetail";

// todo 클라이언트 랜더링 사용하여 useEffect 영역에서 데이터 가져오기, 401 반환시 리다이렉션
export default function PostDetailPage({ params }:{ params: { user: string, title: string } }) {
    return (
        <Layout customForRoot={""}>
            <PostDetail
                writer={params.user}
                title={params.title}/>
        </Layout>
    )
}