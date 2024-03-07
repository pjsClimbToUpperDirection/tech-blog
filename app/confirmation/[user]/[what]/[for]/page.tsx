import InputElement from "../../../../../components/input/inputElement";
import Link from "next/link";

export default function throughPassword({
    params
    }:{
    params: { user: string, what: string, for: string }
    }) {
    return (
        <div className={"grid justify-items-center h-full"}>
            <div
                className={"w-full sm:w-[540px] bg-black h-[300px] sm:h-[270px] z-20  absolute top-[130px] sm:top-[200px]  grid grid-rows-7 rounded px-[40px]  sm:border-2 border-slate-100"}>
                <div className={"row-span-6 grid grid-rows-3"}>
                    <div className={"row-span-1 grid content-center text-slate-300"}>
                        <p>동작을 행하려는 이가 본인인지 확인</p>
                    </div>
                    <div className={"row-span-2"}>
                        <form className={"h-full grid grid-rows-2"}>
                            <div className={"row-span-1"}>
                                <InputElement type={"text"} placeholder={"/confirm/password%_"} custom={""}
                                              value={undefined}/>
                            </div>
                            <div className={"row-span-1"}>
                                <InputElement type={"submit"} placeholder={""}
                                              custom={"w-full border-2 border-white rounded"} value={"눌러서 확인 절차 수행"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}