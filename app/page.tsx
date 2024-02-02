import Form from "../components/root/form"
import Maintext from "../components/root/maintext";
export default function MainPage() {

    return (
        <>
          <div id={"AnimatedText"} className={"min-h-[1000px] h-full w-full bg-stone-200 p-[10px] absolute z-10"}>
              <div className={"h-[100px] w-full text-6xl px-[90px] p-[10px] absolute top-0 grid items-center"}>누군가가 만들고 작성하는 중인 기술 블로그</div>
              <Maintext/>
          </div>
          <Form/>
        </>
    )
}