export default function close() {
    const menuBar = document.getElementById("menuBar");
    menuBar.style.zIndex = "0"

    const navBar = document.getElementById("navBar");
    const clickEvent = new MouseEvent('click', {
        bubbles: true,  // 이벤트가 버블링(부모 요소로 전파)되도록 설정합니다. (해당 엘리먼트의 이벤트만 촉발하고자 하는데 본 설정이 적용되어야만 click 이벤트가 트리거되는 원인을 모르겠음)
        view: window  // 이벤트가 발생한 뷰를 window 로 설정합니다.
    });
    navBar.dispatchEvent(clickEvent)
}