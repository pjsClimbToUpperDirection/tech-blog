import React from "react";
import "../navBar.css"
import MenuBar from "../layout/menuBar"

export default function navBar() {
    let status = 0;
    let previousHTML: string;
    function activate() {
        const lineTwo = document.getElementById("navBar").children[1];
        const lineFour = document.getElementById("navBar").children[3];

        const main = document.getElementById("main");
        if (status == 0) {
            lineTwo.id = "lined"
            lineFour.id = "lined"
            status = 1
            previousHTML = main.innerHTML;
            main.innerHTML = "'" + MenuBar() + "'"
        } else {
            lineTwo.id = "erased"
            lineFour.id = "erased"
            status = 0
            main.innerHTML = previousHTML;
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