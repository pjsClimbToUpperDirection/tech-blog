import Layout from "../../components/layout/layout";

export default function Profile({ params }: { params: { user: string} }) {
    // todo 사용자 프로필 페이지
    return (
        <Layout customForRoot={""}>
            <div className={"text-orange-500"}>profile</div>
        </Layout>
    )
}