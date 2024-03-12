"use client"

import React, {useEffect} from "react";

export default function Charging({
    renderedElementId
    }:{
    renderedElementId: string
}) {
    useEffect(() => {
        setTimeout(() => {
            fillGage(1, 4)
        }, 500)
    }, []);

    function fillGage(level: number, fill: number) {
        if (level < fill) {
            console.log("11")
            document.getElementById("level_" + level).style.width = "100%"
            setTimeout(() => {
                fillGage(level += 1, fill)
            }, 460)
        } else if (level == fill) {
            console.log("22")
            document.getElementById("level_4").style.width = "100%"
            setTimeout(() => {
                clarifyLevel(1, 4)
            }, 200)
        }
    }
    function clarifyLevel(level: number, fill: number) {
        if (level < fill) {
            document.getElementById("level_" + level).style.opacity = "100%"
            setTimeout(() => {
                clarifyLevel(level += 1, fill);
            }, 230)
        } else if (level == fill) {
            document.getElementById("level_4").style.opacity = "100%"
            setTimeout(() => {
                document.getElementById(renderedElementId).style.zIndex = "15"
            }, 320)
            return
        }
    }
    return (
        <div className={"absolute top-0 w-full h-full grid grid-rows-4 z-10 bg-slate-300"}>
            <div className={"opacity-50 rounded-lg row-span-1 mt-1  bg-teal-400  w-0"} id={"level_4"}></div>
            <div className={"opacity-50 rounded-lg row-span-1 mt-1  bg-teal-400  w-0"} id={"level_3"}></div>
            <div className={"opacity-50 rounded-lg row-span-1 mt-1  bg-teal-400  w-0"} id={"level_2"}></div>
            <div className={"opacity-50 rounded-lg row-span-1 mt-1  bg-teal-400  w-0"} id={"level_1"}></div>
        </div>
    )
}