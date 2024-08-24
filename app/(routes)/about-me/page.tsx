"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
           
            <TransitionPage />
            <Avatar />
            <ContainerPage>
               
                <h1 className="text-2xl leading-tight text-center md:text-center md:text-5xl md:mt-10">
                    Garving{' '}
                    <span className="font-bold text-secondary">
                        Vasquez Severino
                    </span>
                   
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;