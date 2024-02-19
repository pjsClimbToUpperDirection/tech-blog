import React from "react";
import "../navBar.css"

export default function navBar() {
    let status = 0;
    function activate() {
        const lineTwo = document.getElementById("navBar").children[1];
        const lineFour = document.getElementById("navBar").children[3];
        if (status == 0) {
            lineTwo.id = "lined"
            lineFour.id = "lined"
            status = 1
        } else {
            lineTwo.id = "erased"
            lineFour.id = "erased"
            status = 0
        }
    }
    return (
        <div id={"navBar"} className={"w-fit h-fit"} onClick={activate}>
            <div className={"w-[20px] h-[5px] border-b-2 border-white"}/>
            <div className={"w-0 h-[5px] border-b-2 border-white"}/>
            <div className={"w-[20px] h-[5px] border-b-2 border-white"}/>
            <div className={"w-0 h-[5px] border-b-2 border-white"}/>
        </div>
    )
}