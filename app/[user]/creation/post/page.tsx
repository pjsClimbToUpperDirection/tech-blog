import Layout from "../../../../components/layout/layout";
import PostCreationForm from "../../../../components/submit/post/postCreationForm";

export default function PostCreation() {
    // Layout 이하 요소만 클라이언트 측에서 랜더링
    return (
        <Layout customForRoot={""}>
            <PostCreationForm />
        </Layout>
    )
}