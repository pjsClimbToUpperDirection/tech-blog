import React from "react";
import "../navBar.css"

export default function navBar({ externalId }:{ externalId: string}) {
    let innerStatus = 0;
    function activate() {
        const lineTwo = document.getElementById("navBar").children[1];
        const lineFour = document.getElementById("navBar").children[3];
        const menuBar = document.getElementById(externalId); // 의존성 유의 !!
        if (innerStatus == 0) {
            lineTwo.id = "lined"
            lineFour.id = "lined"
            innerStatus = 1
            menuBar.style.zIndex = "20"
        } else {
            lineTwo.id = "erased"
            lineFour.id = "erased"
            innerStatus = 0
            menuBar.style.zIndex = "0"
        }
    }
    return (
        <div id={"navBar"} className={"w-fit h-fit"} onClick={activate}>
            <div className={"w-[30px] h-[5px] border-b-2 border-white"}/>
            <div className={"w-0 h-[5px] border-b-2 border-white"}/>
            <div className={"w-[30px] h-[5px] border-b-2 border-white"}/>
            <div className={"w-0 h-[5px] border-b-2 border-white"}/>
        </div>
    )
}