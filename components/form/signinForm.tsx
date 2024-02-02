export default function SigninForm() {

    const cleaner = (text : string, index: number) => {
        const animatedText = document.getElementById('title');
        const isWorking: boolean = false;
        animatedText.innerHTML = ""
        typeWriter(text, 0, animatedText)
    }
    const typeWriter = (text: string, index: number, element: HTMLElement)=> {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            // 100ms마다 typeWriter 함수를 재귀적으로 호출
            setTimeout(function() {
                typeWriter(text, index, element);
            }, 60);
        }
    }

    return (
        <div className={"p-[5px] w-full col-start-2 col-end-4 row-start-3 row-end-5 grid grid-rows-4 bg-slate-300 z-20 opacity-90 m-[5px] rounded"}>
            <div className={"grid content-center"}>
                <h2 className={"row-start-1 row-end-2 text-2xl p-[5px] indent-[10px]"} id={"title"}>하단에 적절한 양식을 작성하여 로그인</h2>
            </div>
            <div id={"formContainer"} className={"row-start-2 row-end-4 grid grid-rows-2"}>
                <div className={"grid items-center m-[5px] px-[10px]"}>
                    <input type={"text"} name={"userNameOrEmail"} id={"userId"} onClick={() => cleaner("사용자 이름(id) 혹은 이메일 입력", 0)} placeholder={"사용자 이름 혹은 이메일"} className={"w-full h-full rounded indent-[10px]"}/>
                </div>
                <div className={"grid items-center m-[5px] px-[10px]"}>
                    <input type={"password"} name={"userPassword"} id={"userPassword"} onClick={() => cleaner("암호 입력 후 본 문구를 클릭하여 로그인", 0)} placeholder={"비밀번호"} className={"w-full h-full rounded indent-[10px]"}/>
                </div>
            </div>
            <div className={"grid content-center p-[5px] indent-[10px]"}>
                <p>현재 사용 가능한 계정이 존재하지 않을 시 <a className={"font-bold"} href={"./signup/"}>회원가입</a></p>
            </div>
        </div>
    )
}