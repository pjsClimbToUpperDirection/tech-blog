import Layout from "../../../../../components/layout/layout";
import FormForModification from "../../../../../components/modification/formForModification";
import ReactiveInputElement from "../../../../../components/input/reactive/reactiveInputElement";
import InputElement from "../../../../../components/input/inputElement"

export default function ModifyEmailAddress() {
    return (
        <Layout customForRoot={""}>
            <FormForModification>
                <div className={"w-full h-[260px] sm:border-2 border-slate-200 grid content-center"}>
                    <div className={"w-full h-fit"}>
                        <InputElement placeholder={"변경하고자 하는 이메일 주소"} id={""} custom={"m-3 mx-5"} type={"email"} value={undefined}/>
                    </div>
                    <div className={"w-full h-fit"}>
                        <ReactiveInputElement latch={undefined} placeholder={"인증번호"} type={"text"}/>
                    </div>
                </div>
            </FormForModification>
        </Layout>
)
}