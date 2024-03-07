import Link from "next/link";
import InputElement from "../../components/input/inputElement"

export default function signIn() {
    return (
        <>
            <div className={"grid justify-items-center h-screen min-h-[900px]"}>
                <div className={"w-full sm:w-[540px] bg-black absolute top-[130px] sm:top-[200px] h-[400px] z-20 grid grid-rows-5 rounded px-[40px] sm:border-2 border-slate-100"}>
                    <div className={"row-span-4 grid grid-rows-5"}>
                        <div className={"row-span-1 grid content-center text-slate-300"}>
                            <p>기술 블로그에 로그인</p>
                        </div>
                        <div className={"row-span-4"}>
                            <form className={"h-full grid grid-rows-3"}>
                                <div className={"row-span-1"}>
                                    <InputElement type={"email"} placeholder={"/user/email%_"} custom={""}
                                                  value={undefined}/>
                                </div>
                                <div className={"row-span-1"}>
                                    <InputElement type={"password"} placeholder={"/login/pw%_"} custom={""}
                                                  value={undefined}/>
                                </div>
                                <div className={"row-span-1"}>
                                    <InputElement type={"submit"} placeholder={""}
                                                  custom={"w-full border-2 border-white rounded"} value={"sign_in"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}