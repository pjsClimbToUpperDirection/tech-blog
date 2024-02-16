import Link from "next/link";
import DefaultBtn from "../components/button/defaultBtn"
export default function MainPage() {
    const repeatCount_l: number = 8;
    const repeatCount_r: number = 7;
    return (
        <>
            <div className={"w-full h-[2000px] grid grid-cols-6 bg-black"}>
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
                </div>
                <div className={"col-span-5 m-[10px] grid justify-items-center  md:grid-cols-5"}>
                    <div className={"grid grid-rows-12  md:col-start-1 md:col-end-5"}>
                        <div className={"mt-[50px] h-fit row-span-1 grid justify-center content-center"}>
                            <h2 className={"font-bold text-5xl text-slate-300"}>지금 깜빡이를 키고 추월하세요!</h2>
                        </div>
                        <div className={"row-start-2 row-end-6 grid grid-rows-5"}>
                            <div className={"row-span-1 grid grid-rows-3"}>
                                <div className={"row-span-2 grid justify-center content-center"}>
                                    <Link href={"/signin"}>
                                        <DefaultBtn innerText={"Log_in"} custom={"text-white"}/>
                                    </Link>
                                </div>
                                <div className={"grid justify-center content-center"}>
                                    <p className={"text-slate-300"}>
                                        아직 소유한 계정이 없을 시 <Link href={"/signup"} className={"text-orange-500"}>회원가입</Link>
                                    </p>
                                </div>
                            </div>
                            <div className={"row-span-1"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}