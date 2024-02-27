import Layout from "../../../../../components/layout/layout";
import FormForModification from "../../../../../components/modification/formForModification";
import InputElement from "../../../../../components/input/inputElement";
import React from "react";

export default function ModifyAccount() {
    return (
        <Layout customForRoot={""}>
            <FormForModification zIndex={0}>
                <div className={"w-full h-[260px] sm:border-2 border-slate-200"}>
                    <div className={"w-full h-full grid content-center"}>
                        <div className={"w-full h-fit"}>
                            <InputElement type={"password"} value={undefined} custom={"m-3"} placeholder={"새 비밀번호"}/>
                        </div>
                        <div className={"w-full h-fit"}>
                            <InputElement type={"password"} value={undefined} custom={"m-3"} placeholder={"확인"}/>
                        </div>
                        <div className={"w-full h-fit"}>
                            <InputElement type={"submit"} placeholder={""}
                                          custom={"border-2 border-white rounded m-4"} value={"비밀번호 변경"}/>
                        </div>
                    </div>
                </div>
            </FormForModification>
        </Layout>
    )
}