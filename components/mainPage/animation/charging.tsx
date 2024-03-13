"use client"

import React, {useEffect} from "react";

export default function Charging({
    renderedElementId,
    idForConnect1,
    idForConnect2
    }:{
    renderedElementId: string,
    idForConnect1: string,
    idForConnect2: string
}) {
    useEffect(() => {
        setTimeout(() => {
            fillGage(1, 4)
        }, 100)
    }, []);

    function fillGage(level: number, fill: number) {
        if (level < fill) {
            document.getElementById("level_" + level).style.width = "100%"
            setTimeout(() => {
                fillGage(level += 1, fill)
            }, 230)
        } else if (level == fill) {
            document.getElementById("level_4").style.width = "100%"
            setTimeout(() => {
                clarifyLevel(1, 4)
            }, 100)
        }
    }
    function clarifyLevel(level: number, fill: number) {
        if (level < fill) {
            document.getElementById("level_" + level).style.opacity = "100%"
            setTimeout(() => {
                clarifyLevel(level += 1, fill);
            }, 120)
        } else if (level == fill) {
            document.getElementById("level_4").style.opacity = "100%"
            setTimeout(() => {
                let renderedElement = document.getElementById(renderedElementId);
                renderedElement.classList.add("appear"); // css 클래스를 추가하여 애니메이션을 촉발
                setTimeout(() => {
                    document.getElementById(idForConnect1).classList.add("guidance") // css 클래스를 추가하여 애니메이션을 촉발
                    document.getElementById(idForConnect2).classList.add("guidance") // css 클래스를 추가하여 애니메이션을 촉발
                }, 200)
                renderedElement.style.zIndex = "15";
                renderedElement.style.opacity = "100%"
            }, 120)
            return
        }
    }

    return (
        <div className={"absolute top-0 w-full h-full grid grid-rows-4 z-10 bg-black"}>
            <div className={"opacity-70 rounded-lg row-span-1  bg-cyan-300  w-0"} id={"level_4"}></div>
            <div className={"opacity-70 rounded-lg row-span-1 mt-1  bg-cyan-300  w-0"} id={"level_3"}></div>
            <div className={"opacity-70 rounded-lg row-span-1 mt-1  bg-cyan-300  w-0"} id={"level_2"}></div>
            <div className={"opacity-70 rounded-lg row-span-1 mt-1  bg-cyan-300  w-0"} id={"level_1"}></div>
        </div>
    )
}