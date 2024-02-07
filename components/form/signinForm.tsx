import instructionForSubmit from "./instructionAnimation/instructionForSubmit";

export default function SignInForm({ rootElement } : { rootElement: string | null}) {
    let done = 0; // 스크립트의 반복 동작을 피하고자 일부러 side Effect 유발
    return (
        <div id={"signInForm"}
             className={"h-[100%] w-full grid justify-items-center bg-white p-[10px] absolute " + rootElement}>
            <div
                className={"p-[5px] w-full lg:w-[1024px] h-[208px] fixed top-[230px] grid grid-rows-4 bg-slate-300 m-[5px] rounded"}>
                <div className={"grid content-center"}>
                    <h2 className={"row-start-1 row-end-2 text-xl  p-[5px] indent-[10px]"}
                        id={"title"} onClick={() => done = instructionForSubmit("자동완성 기능 사용 시 본 문구를 다시 클릭하여 로그인 시도", "자동완성 기능 사용 시 본 문구를 다시 클릭", done)}>
                        하단에 적절한 양식을 작성하여 로그인
                    </h2>
                </div>
                <div id={"formContainer"} className={"row-start-2 row-end-4 grid grid-rows-2"}>
                    <div className={"grid items-center m-[5px] px-[10px]"}>
                        <input type={"text"} name={"userNameOrEmail"} id={"userId"} placeholder={"사용자 이름 혹은 이메일"}
                               className={"w-full h-full rounded indent-[10px]"}/>
                    </div>
                    <div className={"grid items-center m-[5px] px-[10px]"}>
                        <input type={"password"} name={"userPassword"} id={"userPassword"}
                               onFocus={() => done = instructionForSubmit("암호 입력 후 본 문구를 클릭하여 로그인 시도", null, done)} placeholder={"비밀번호"}
                               className={"w-full h-full rounded indent-[10px]"}/>
                    </div>
                </div>
                <div className={"grid content-center p-[5px] indent-[10px]"}>
                    <p>현재 사용 가능한 계정이 존재하지 않을 시 <a className={"font-bold"} href={"./signup/"}>회원가입</a></p>
                </div>
            </div>
        </div>
    )
}