import Link from "next/link";
import InputElement from "../components/input/inputElement";
export default function MainPage() {
    return (
        <>
            <div className={"w-full h-[2000px] grid justify-center bg-black"}>
                <div className={" m-[10px] grid justify-items-center"}>
                    <div className={"grid grid-rows-12"}>
                        <div className={"h-full row-span-1 grid justify-center content-center px-[10px]"}>
                            <h2 className={"font-bold text-5xl text-slate-300"}>추월차선을 달리고 있나요?</h2>
                        </div>
                        <div className={"row-start-2 row-end-6 grid grid-rows-5 px-[30px]"}>
                            <form className={"row-span-2 grid grid-rows-3"}>
                                <div className={"row-span-1"}>
                                    <InputElement type={"email"} placeholder={"/user/email%_"} custom={""} value={undefined}/>
                                </div>
                                <div className={"row-span-1"}>
                                    <InputElement type={"password"} placeholder={"/login/pw%_"} custom={""} value={undefined}/>
                                </div>
                                <div className={"row-span-1"}>
                                    <InputElement type={"submit"} placeholder={""} custom={"w-full border-2 border-white rounded"} value={"sign_in"}/>
                                </div>
                            </form>
                            <div className={"row-span-1"}>
                                <div className={"grid justify-center content-center"}>
                                    <p className={"text-slate-300"}>
                                        아직 소유한 계정이 없을 시 <Link href={"/signup"} className={"text-orange-500"}>회원가입</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

/*
const repeatCount_l: number = 8;
    const repeatCount_r: number = 7;
* <div className={"w-full h-[2000px] grid grid-cols-6 bg-black"}>
                <div className={"col-span-1 grid grid-cols-2"}>
                    <div className={"h-full col-span-1 grid grid-rows-20"}>
                        {[...Array(repeatCount_l)].map((_, index) => (
                            <div key={index} className={"border-r-[15px] border-slate-200 mt-[20px] mr-[10px]"}></div>
                        ))}
                        <div className={"row-span-12 border-r-[15px] border-slate-200 mr-[10px]"}/>
                    </div>
                    <div className={"h-full col-span-1 grid grid-rows-20"}>
                        <div className={"row-span-12 border-l-[15px] border-slate-200 mr-[10px]"}/>
                        {[...Array(repeatCount_r)].map((_, index) => (
                            <div key={index} className={"border-l-[15px] border-slate-200 mt-[20px] mr-[10px]"}></div>
                        ))}
                    </div>
                </div>*/
