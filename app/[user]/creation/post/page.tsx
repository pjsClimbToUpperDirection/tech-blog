import Layout from "../../../../components/layout/layout";
import InputElement from "../../../../components/input/inputElement"

export default function writeForm() {
    return (
        <Layout customForRoot={""}>
            <form className={"w-full h-full relative flex flex-col"}>
                <div className={"sm:border-x-2 border-t-2 border-slate-300 w-full h-[100px]"}>
                    <div className={"border-b-2 border-dashed w-full h-full flex flex-col"}>
                        <div className={"w-full h-full flex-1 px-4"}>
                            <InputElement placeholder={"제목"} type={"text"} value={undefined} custom={""}/>
                        </div>
                        <div className={"w-full h-fit text-white grid justify-items-center"}>
                            ---------절취선---------
                        </div>
                    </div>
                </div>
                <div className={"sm:border-x-2 border-slate-300 w-full flex-1 z-10 my-2"}>
                    <div className={"border-y-2 border-dashed border-slate-300 w-full h-full p-3"}>
                        <textarea className={"w-full h-full bg-black text-gray-200 outline-0 resize-none"}/>
                    </div>
                </div>
                <div className={"sm:border-x-2 border-b-2 border-slate-300 w-full h-[100px]"}>
                    <div className={"w-full h-full border-t-2 border-dashed border-slate-300"}>
                        <div className={"w-full h-fit text-white grid justify-items-center"}>
                            ---------절취선---------
                        </div>
                        <div className={"text-orange-500 w-full h-fit"}>
                            <input type={"submit"} value={"눌러서 게시글을 업로드"}
                                   className={"w-full h-fit my-4"}/>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )
}