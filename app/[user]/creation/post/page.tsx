import Layout from "../../../../components/layout/layout";
import PostCreationForm from "../../../../components/submit/post/postCreationForm";

export default function PostCreation({
    params
    }:{
    params: { user: string }
}) {
    const postCreationUrl: string = process.env.BACKEND_ORIGIN + "/api/v1/post-api/uploadPost"
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    return (
        <Layout customForRoot={""}>
            <PostCreationForm
                postCreationUrl={postCreationUrl}
                writer={params.user}/>
        </Layout>
    )
}