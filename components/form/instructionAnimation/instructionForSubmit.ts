import typeWriter from "../../animation/typewriter";

export default function instructionForSubmit(ForDeskTop: string, ForMobile: string | null, done: number) {
    // 본 함수 사용시 해당 컴포넌트에 다음 변수 선언 -> let done = 0;
    const animatedText = document.getElementById('title');
    animatedText.addEventListener("click", () => {alert("submitted")}) // 로그인 양식 제출 로직 작성(함수 호출 형식으로 구현)
    if (done == 0){
        animatedText.innerHTML = ""
        if (window.innerWidth < 640) // 모바일 기기 대응
            if (ForMobile == null)
                typeWriter(ForDeskTop, 0, animatedText, 30);
            else
                typeWriter(ForMobile, 0, animatedText, 30);
        else
            typeWriter(ForDeskTop, 0, animatedText, 30);
    }
    return 1;
}

// 컴포넌트 내에서 사용되던 기존 함수
/*let passcodeArea = 0;
    const cleaner = (ForDeskTop: string, ForMobile: string | null) => {
        const animatedText = document.getElementById('title');
        animatedText.addEventListener("click", () => {alert("submitted")}) // 로그인 양식 제출 로직 작성
        if (passcodeArea == 0){
            animatedText.innerHTML = ""
            if (window.innerWidth < 640) // 모바일 기기 대응
                if (ForMobile == null)
                    typeWriter(ForDeskTop, 0, animatedText, 30);
                else
                    typeWriter(ForMobile, 0, animatedText, 30);
            else
                typeWriter(ForDeskTop, 0, animatedText, 30);
        }
        passcodeArea = 1;
    }*/