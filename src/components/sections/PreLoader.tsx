"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ultraFluidEase = [0.85, 0, 0.15, 1] as const;
const restoreEase = [0.22, 1, 0.36, 1] as const;

interface PreloaderProps {
  isDismissing: boolean;
  onDismiss: () => void;
  onRestore?: () => void;
}

export default function Preloader({
  isDismissing,
  onDismiss,
  onRestore,
}: PreloaderProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  // MOUSE-DRIVEN RADIAL TINT
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const smoothMouseX = useSpring(mouseX, { stiffness: 180, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 180, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (!isDismissing) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDismissing, mouseX, mouseY]);

  // SCROLL-DRIVEN CARD MOVEMENT
  const { scrollY } = useScroll();
  const rawScrollY = useTransform(scrollY, [0, 120], [0, 14]);
  const scrollYCard = useSpring(rawScrollY, { stiffness: 90, damping: 24 });

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = isDismissing ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDismissing]);

  const handleDismiss = () => {
    setHasInteracted(true);
    onDismiss();
  };

  const handleRestore = () => {
    if (!isDismissing || !onRestore) return;
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const timer = setInterval(() => {
        if (window.scrollY <= 1) {
          clearInterval(timer);
          window.scrollTo({ top: 0, behavior: "instant" });
          onRestore();
        }
      }, 25);
    } else {
      onRestore();
    }
  };

  const dismissTransition = { duration: 2.0, delay: 0.05, ease: ultraFluidEase };
  const restoreTransition = { duration: 1.0, delay: 0, ease: restoreEase };
  const drawerTransition = isDismissing
    ? {
        top: dismissTransition,
        left: dismissTransition,
        width: dismissTransition,
        height: dismissTransition,
        paddingLeft: dismissTransition,
        paddingRight: dismissTransition,
        paddingTop: dismissTransition,
      }
    : hasInteracted
    ? {
        top: restoreTransition,
        left: restoreTransition,
        width: restoreTransition,
        height: restoreTransition,
        paddingLeft: restoreTransition,
        paddingRight: restoreTransition,
        paddingTop: restoreTransition,
      }
    : {
        top: { duration: 2.4, delay: 1.4, ease: ultraFluidEase },
        paddingLeft: { duration: 2.4, delay: 3.5, ease: ultraFluidEase },
        paddingRight: { duration: 2.4, delay: 3.5, ease: ultraFluidEase },
        paddingTop: { duration: 2.4, delay: 3.5, ease: ultraFluidEase },
      };

  return (
    <>
      {/* 1. CURTAIN OVERLAY */}
      <motion.div
        animate={{ y: isDismissing ? "100%" : "0%" }}
        transition={{
          duration: isDismissing ? 2.0 : hasInteracted ? 0.9 : 2.0,
          delay: isDismissing ? 0.05 : 0,
          ease: hasInteracted && !isDismissing ? restoreEase : ultraFluidEase,
        }}
        style={{
          // Remains active during both expand and dismiss transitions
          WebkitMaskImage:
            isDismissing || hasInteracted
              ? "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 20px, rgba(0,0,0,0.7) 50px, black 80px)"
              : undefined,
          maskImage:
            isDismissing || hasInteracted
              ? "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 20px, rgba(0,0,0,0.7) 50px, black 80px)"
              : undefined,
        }}
        className="fixed inset-0 z-[100] bg-[#f2f2f2] overflow-hidden select-none pointer-events-none"
      >
        {/* TOP-EDGE HEAVY BLUR DIFFUSER (PERSISTENT DURING EXPAND & DISMISS) */}
        {(isDismissing || hasInteracted) && (
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-16 pointer-events-none z-40 backdrop-blur-xl blur-lg bg-[#f2f2f2]/40 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] [WebkitMaskImage:linear-gradient(to_bottom,black_20%,transparent_100%)]"
          />
        )}

        {/* RADIAL TINT POINTER FOLLOWER */}
        <motion.div
          style={{ x: smoothMouseX, y: smoothMouseY }}
          className="absolute -top-[450px] -left-[450px] w-[900px] h-[900px] rounded-full pointer-events-none z-0 mix-blend-multiply bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,rgba(14,116,144,0.04)_40%,transparent_65%)] blur-[80px]"
        />

        {/* TOP DOWN-CHEVRON BUTTON */}
        <motion.button
          onClick={handleDismiss}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: hasInteracted ? 0.4 : 1.0, delay: hasInteracted ? 0.1 : 5.2, ease: restoreEase }}
          aria-label="Enter site"
          className={`absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 p-3 flex flex-col items-center justify-center outline-none ${
            isDismissing ? "pointer-events-none" : "cursor-pointer pointer-events-auto"
          }`}
        >
          <motion.svg
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 sm:w-12 h-6 sm:h-7 text-zinc-900 hover:text-zinc-600 transition-colors"
            viewBox="0 0 48 24"
            fill="none"
          >
            <path d="M6 5L24 18L42 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.button>

        {/* "I AM" + RAUMAY AGGARWAL */}
        <motion.div
          initial={{ y: "0vh" }}
          animate={{ y: "-18vh" }}
          transition={{
            duration: hasInteracted ? 0.85 : 2.2,
            delay: hasInteracted ? 0 : 1.7,
            ease: hasInteracted ? restoreEase : ultraFluidEase,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-30"
        >
          <div className="overflow-hidden mb-3 sm:mb-4">
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: hasInteracted ? 0.5 : 1.2, delay: hasInteracted ? 0 : 0.6, ease: restoreEase }}
              className="text-[0.9rem] sm:text-[1.2rem] tracking-[0.38em] text-zinc-500 uppercase font-medium"
            >
              I am
            </motion.p>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: hasInteracted ? 0.6 : 2.4, delay: 0, ease: restoreEase }}
            >
              <h1 className="font-anton text-[9vw] lg:text-[8vw] font-black tracking-tighter leading-[0.85] text-zinc-900 uppercase whitespace-nowrap scale-y-[1.15] origin-bottom antialiased">
                Raumay Aggarwal
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* 2. DOCKED DRAWER IMAGE */}
      <motion.div
        onClick={handleRestore}
        initial={{ top: "100%", left: "0%", width: "100%", height: "55vh", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px" }}
        style={{ y: isDismissing ? scrollYCard : 0 }}
        animate={
          isDismissing
            ? {
                top: "calc(100% - 38px)",
                left: "44px",
                width: "min(340px, 75vw)",
                height: "140px",
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "5px",
              }
            : {
                top: "45%",
                left: "0px",
                width: "100%",
                height: "55vh",
                paddingLeft: "14px",
                paddingRight: "14px",
                paddingTop: "14px",
              }
        }
        transition={drawerTransition}
        className={`fixed bottom-0 z-[105] ${
          isDismissing
            ? "cursor-pointer pointer-events-auto hover:-translate-y-1 transition-transform duration-150"
            : "pointer-events-none"
        }`}
      >
        <motion.div
          initial={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
          animate={{
            borderTopLeftRadius: isDismissing ? "0px" : "22px",
            borderTopRightRadius: isDismissing ? "0px" : "22px",
          }}
          transition={{
            duration: hasInteracted && !isDismissing ? 0.75 : 1.4,
            delay: hasInteracted ? 0 : isDismissing ? 0.05 : 3.5,
            ease: restoreEase,
          }}
          className="relative w-full h-full overflow-hidden bg-zinc-950 shadow-[0_-6px_18px_rgba(0,0,0,0.06)]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/intro-cover.png"
              alt="Intro Panel"
              fill
              priority
              className="object-cover object-center brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}