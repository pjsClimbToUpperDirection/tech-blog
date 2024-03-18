import Layout from "../../components/layout/layout";
import MainContent from "../../components/main_user/mainContent";

export default function Profile({
    params
    } : {
    params: { user: string } }) {
    return (
        <Layout customForRoot={""}>
            <div className={"w-full h-full text-gray-200"}>
                <div className={"w-full h-[70px] grid content-center"}>
                    <p className={"grid justify-items-center text-[25px]"}>{params.user} 의 계정 상세 정보</p>
                </div>
                <div className={"w-full h-full grid grid-rows-11 p-2"}>
                    <div className={"w-full h-fit row-span-3 sm:border-2  rounded grid grid-rows-4"}>
                        <MainContent user={params.user}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
