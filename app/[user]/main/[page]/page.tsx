import Layout from "../../../../components/layout/layout";
import PostList from "../../../../components/PostList/postList";

export default function Page({ params }: { params: { user: string, page: number } }) {
    const postListUrl = "http://localhost:1701/api/v1/get-api/lookUpAll"
    return (
        <>
            <Layout customForRoot={""}>
                <PostList
                    page={params.page}
                    user={params.user}
                    maxlengthInOnePage={7}
                    postListUrl={postListUrl}/>
            </Layout>
        </>
    )
}