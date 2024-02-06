import typeWriter from "../animation/typewriter";
import instructionForSubmit from "./instructionAnimation/instructionForSubmit";

export default function SignUpForm() {
    let done = 0
    return (
        <div id={"signUpForm"}
             className={"h-[1720px] w-full grid justify-items-center bg-white p-[10px] absolute "}>
            <div
                className={"p-[5px] w-full lg:w-[1024px] h-[400px] fixed top-[230px] grid grid-rows-5 bg-slate-300 m-[5px] rounded"}>
                <div className={"grid content-center"}>
                    <h2 className={"row-start-1 row-end-2 text-xl  p-[5px] indent-[10px]"} id={"title"}>
                        하단에 적절한 양식을 작성하여 회원가입
                    </h2>
                </div>
                <div id={"formContainer"} className={"row-start-2 row-end-5 grid grid-rows-4"}>
                    <div className={"grid items-center m-[5px] px-[10px]"}>
                        <input type={"text"} name={"E-mail"} id={"userEmail"} placeholder={"이메일"}
                               className={"w-full h-full rounded indent-[10px]"} autoComplete={"nope"}/>
                    </div>
                    <div className={"grid items-center m-[5px] px-[10px]"}>
                        <input type={"text"} name={"userName"} id={"userName"} placeholder={"사용자 이름"}
                               className={"w-full h-full rounded indent-[10px]"} autoComplete={"nope"}/>
                    </div>
                    <div className={"grid items-center m-[5px] px-[10px]"}>
                        <input type={"password"} name={"userPassword"} id={"userPassword"}
                               placeholder={"비밀번호"} className={"w-full h-full rounded indent-[10px]"} autoComplete={"nope"}/>
                    </div>
                    <div className={"grid items-center m-[5px] px-[10px]"}>
                        <input type={"password"} name={"Confirmation"} id={"Confirmation"}
                               placeholder={"비밀번호 재확인"} className={"w-full h-full rounded indent-[10px]"} autoComplete={"nope"}
                               onFocus={() => done = instructionForSubmit("비밀번호 제차 입력 후 본 문구를 클릭하여 회원가입 시도", "제차 입력 후 본 문구를 클릭하여 회원가입", done)}/>
                    </div>
                </div>
                <div className={"grid content-center p-[5px] indent-[10px]"}>
                    <p>이미 사용 가능한 계정이 있을 시 <a className={"font-bold"} href={"/"}>시작 페이지</a></p>
                </div>
            </div>
        </div>
    )
}