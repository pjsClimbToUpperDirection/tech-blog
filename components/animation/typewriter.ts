export default function typeWriter (text: string, index: number, element: HTMLElement, cycle: number) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        // 주어진 시간(밀리초) 마다 typeWriter 함수를 재귀적으로 호출
        setTimeout(function () {
            typeWriter(text, index, element, cycle);
        }, cycle);
    }
}