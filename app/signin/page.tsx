import Link from "next/link";
import "../../components/input.css"

export default function signIn() {
    return (
        <>
            <div className={"grid justify-items-center h-screen min-h-[730px]"}>
                <div className={"w-full sm:w-[540px] bg-black fixed top-[130px] h-[400px] z-20 grid grid-rows-5 rounded px-[40px] sm:border-2 border-slate-100"}>
                    <div className={"row-span-4 grid grid-rows-5"}>
                        <div className={"row-span-1 grid content-center text-slate-300"}>
                            <p>기술 블로그에 로그인</p>
                        </div>
                        <div className={"row-span-4"}>
                            <form className={"h-full grid grid-rows-3"}>
                                <div className={"row-span-1 grid content-center"}>
                                    <input className={"bg-black"}
                                           placeholder={"/user/email%_"}/>
                                </div>
                                <div className={"row-span-1 grid content-center"}>
                                    <input type={"password"} className={"bg-black"}
                                           placeholder={"/login/pw%_"}/>
                                </div>
                                <div className={"row-span-1 grid content-center"}>
                                    <input type={"submit"}
                                           className={"w-full bg-black border-2 border-white rounded"}
                                           value={"login"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={"row-span-1 grid content-center"}>
                        <p className={"text-slate-300"}>
                            아직 소유한 계정이 없을 시 <Link href={"/signup"} className={"text-orange-500"}>회원가입</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}