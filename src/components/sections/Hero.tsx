"use client";

import Image from "next/image";
import Container from "../layout/Container";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-red-200/70 blur-[150px] animate-pulse" />
        <div className="absolute top-1/4 -right-32 h-[600px] w-[600px] rounded-full bg-yellow-100/55 blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-green-100 blur-[140px] animate-pulse" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-50 items-center">
          {/* LEFT */}
          <div className="space-y-5 mt-15">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 backdrop-blur">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-[10px] text-brown-600 montserrat uppercase tracking-[0.05em]">
                Building BusFlow
              </span>
            </div>

            <div>
              <span className="geist-font text-[120px] font-medium leading-[0.94] tracking-[-0.045em] text-gray-500 flex flex-col cursor-default">
                <span className="hover:text-red-400 transition-all duration-25">
                  Builder.
                </span>
                <span className="hover:text-green-400/90 transition-all duration-250">
                  Learner.
                </span>
                <span className="hover:text-blue-400/90 transition-all duration-250">
                  Solver.
                </span>
              </span>

              <div className="flex items-center ml-15 mt-10 gap-8">
                <a
                  href="https://linkedin.com/in/raumayaggarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#0A66C2] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={30} />
                </a>

                <a
                  href="https://github.com/imraumayaggarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-black transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={30} />
                </a>

                <a
                  href="https://x.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-black transition-colors duration-300"
                  aria-label="X / Twitter"
                >
                  <FaXTwitter size={30} />
                </a>

                <a
                  href="mailto:youremail@gmail.com"
                  className="text-zinc-300 hover:text-[#EA4335] transition-colors duration-300"
                  aria-label="Gmail"
                >
                  <SiGmail size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center top-5">
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-200/70 blur-[120px] animate-pulse" />

              {/* Dialed-Down Half-Intensity 4-Frame Line Boil Filters */}
              <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
                <defs>
                  <filter id="distort-boil-1" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.048" numOctaves="3" result="noise" seed="3" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
                  </filter>

                  <filter id="distort-boil-2" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.052" numOctaves="3" result="noise" seed="11" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
                  </filter>

                  <filter id="distort-boil-3" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" result="noise" seed="19" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.0" xChannelSelector="R" yChannelSelector="G" />
                  </filter>

                  <filter id="distort-boil-4" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.050" numOctaves="3" result="noise" seed="27" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.4" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
              </svg>

              {/* Anchored Stepped Animation Loop */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes activeLineShift {
                  0%, 100% { filter: url(#distort-boil-1); }
                  25%      { filter: url(#distort-boil-2); }
                  50%      { filter: url(#distort-boil-3); }
                  75%      { filter: url(#distort-boil-4); }
                }
                .distort-line-boil {
                  animation: activeLineShift 0.9s steps(1) infinite;
                  transform: none !important;
                }
              `}} />

              {/* Anchored Sketch Container */}
              <div className="relative z-10 w-[400px] h-[400px] flex items-center justify-center">
                <Image
                  src="/imgimg.png"
                  alt="Raumay"
                  width={400}
                  height={400}
                  priority
                  className="relative z-10 distort-line-boil drop-shadow-xl select-none pointer-events-none"
                />
              </div>

              <p
                className="
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
                "
              >
                {"ASK MY AI TWIN ".split("").map((char, i) => (
                  <span key={i}>{char === " " ? "\u00A0" : char}</span>
                ))}
              </p>

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