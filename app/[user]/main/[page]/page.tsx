import Layout from "../../../../components/layout/layout";
import PostList from "../../../../components/PostList/postList";

export default function Page({ params }: { params: { user: string, page: number } }) {
    return (
        <>
            <Layout customForRoot={""}>
                <PostList page={params.page} user={params.user} maxlengthInOnePage={3}/>
            </Layout>
        </>
    )
}