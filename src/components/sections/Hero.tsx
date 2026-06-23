"use client";
import {useState, useEffect} from 'react';
import Image from "next/image";
import Container from "../layout/Container";

import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Hero() {
    // const translations = {
    //     builder: ["Builder.", "निर्माता.", "創造者."],
    //     learner: ["Learner.", "शिक्षार्थी.", "学習者."],
    //     solver: ["Solver.", "समाधानकर्ता.", "解決者."]
    // };

    // const [builderIndex, setBuilderIndex] = useState(0);
    // const [learnerIndex, setLearnerIndex] = useState(0);
    // const [solverIndex, setSolverIndex] = useState(0);

    // useEffect(() => {
    //   const builderTimer = setInterval(() => {
    //     setBuilderIndex((prev) => (prev + 1) % 3);
    //   }, 3000);

    //   const learnerTimer = setInterval(() => {
    //     setLearnerIndex((prev) => (prev + 1) % 3);
    //   }, 5000);

    //   const solverTimer = setInterval(() => {
    //     setSolverIndex((prev) => (prev + 1) % 3);
    //   }, 7000);

    //   return () => {
    //     clearInterval(builderTimer);
    //     clearInterval(learnerTimer);
    //     clearInterval(solverTimer);
    //   };
    // }, []);    


    return (
        <section
            id="Home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-white">
                <div
                    className="
                        absolute
                        -top-32
                        -left-32
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-red-200/70
                        blur-[150px]
                        animate-pulse
                    "
                />

                <div
                    className="
                        absolute
                        top-1/4
                        -right-32
                        h-[600px]
                        w-[600px]
                        rounded-full
                        bg-yellow-100/55
                        blur-[140px]
                        animate-pulse
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        left-1/3
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-green-100
                        blur-[140px]
                        animate-pulse
                    "
                />

            </div>

            <Container>
                <div className="grid lg:grid-cols-2 gap-50 items-center">
                    {/* LEFT */}
                    <div className="space-y-5  mt-15">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300  backdrop-blur">
                            <div className="h-2 w-2 rounded-full bg-green-500"/>
                            <span className="text-[10px] text-brown-600 montserrat uppercase tracking-[0.05em]">
                                Interning at TBI
                            </span>
                        </div>

                        <div>

                            <span className="geist-font text-[120px] font-medium leading-[0.94] tracking-[-0.045em] text-gray-500  flex flex-col cursor-default">
                                {/* <span className='min-h-[1rem]'>{translations.builder[builderIndex]}</span>
                                <span className='min-h-[1rem]'>{translations.learner[learnerIndex]}</span>
                                <span className='min-h-[1rem]'>{translations.solver[solverIndex]}</span> */}

                                <span className='hover:text-red-400 transition-all duration-25'>
                                    Builder.
                                </span>

                                <span className='hover:text-green-400/90 transition-all duration-250'>
                                    Learner.
                                </span>

                                <span className='hover:text-blue-400/90 transition-all duration-250'>
                                    Solver.
                                </span>

                            </span>

                            <div className="flex items-center ml-15 mt-10 gap-8">
                                <a href="https://linkedin.com/in/raumayaggarwal" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-[#0A66C2] transition-colors duration-300" aria-label="LinkedIn">
                                    <FaLinkedinIn size={30} />
                                </a>

                                <a href="https://github.com/imraumayaggarwal" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-black transition-colors duration-300" aria-label="GitHub">
                                    <FaGithub size={30} />
                                </a>

                                <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-black transition-colors duration-300 " aria-label="X / Twitter">
                                    <FaXTwitter size={30} />
                                </a>

                                <a href="mailto:youremail@gmail.com" className="text-zinc-300 hover:text-[#EA4335] transition-colors duration-300" aria-label="Gmail">
                                    <SiGmail size={30} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="relative flex justify-center">

                        <div className="relative">

                            <div
                                className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-blue-200/70
                                    blur-[120px]
                                    animate-pulse
                                "
                            />

                            <Image
                                src="/imgimg.png"
                                alt="Raumay"
                                width={400}
                                height={400}
                                priority
                                className="relative z-10"
                            />

                            <p className="
                                absolute
                                -bottom-8
                                left-1/2
                                -translate-x-1/2
                                whitespace-nowrap
                                montserrat
                                wave-text
                                text-[12px]
                                uppercase
                                tracking-[0.30em]
                                text-sky-600
                                cursor-default
                                hover:text-shadow-md
                                transition-all
                                duration-300
                                ">
                                    {"ASK MY AI TWIN ".split("").map(
                                        (char, i) => (
                                            <span 
                                                key={i}>{char === " " ? "\u00A0" : char}
                                            </span>
                                        ))
                                    }
                            </p>
                            
                            {/* <p className="montserrat font-bold text-[9px] uppercase tracking-[0.15em] text-zinc-400 text-center mt-2">
                                    Raumay Aggarwal
                            </p> */}

                            <div className="absolute bottom-10 right-0 z-20 w-fit">

                                <div className="voice-btn-wrapper animate-slow-bounce">

                                    <button
                                    className="
                                        h-12
                                        w-20
                                        rounded-full
                                        bg-white
                                        shadow-md
                                        text-2xl
                                        hover:scale-103
                                        transition-all
                                        cursor-pointer
                                        block
                                        hover:bg-white/90
                                        duration-200
                                    "
                                    >

                                    |၊|။
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}