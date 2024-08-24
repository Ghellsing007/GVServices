
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/236826071_3327509340809256_4258306061589731265_n (1).jpg" width="400" height="400" className="w-72 h-72 rounded-full object-cover " alt="Particles " />
        </MotionTransition>
    )
}
