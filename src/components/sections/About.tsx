"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "../layout/Container";

// Standard graceful fade up for text
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
  },
});

// Blur-to-focus animation for the trait blobs
const blurReveal = {
  hidden: { opacity: 0, filter: "blur(15px)", scale: 0.8, y: 20 },
  show: (i : number) => ({
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const traits = [
  { word: "Curious", bg: "#FEE2E2", borderColor: "#FCA5A5", desc: "I need to know how everything works." },
  { word: "Builder", bg: "#DCFCE7", borderColor: "#86EFAC", desc: "I make real things with real problems." },
  { word: "Analyst", bg: "#DBEAFE", borderColor: "#93C5FD", desc: "I think through every edge case." },
  { word: "Depth", bg: "#FEF3C7", borderColor: "#FCD34D", desc: "I don't skim. I go all the way in." },
];

const cards = [
  {
    label: "Who I Am",
    bg: "#1a1a1a",
    text: "#EDEAE4",
    borderColor: "#FCA5A5",
    content: "I'm Raumay — a third-year CSE student at Graphic Era, Dehradun. Equal parts perfectionist and impatient. I want every detail right, but I also want it shipped yesterday.",
  },
  {
    label: "What I Do",
    bg: "#DCFCE7",
    text: "#14532d",
    borderColor: "#86EFAC",
    content: "I build AI-powered full stack applications at TBI, GEU. Working at the intersection of LLMs, backend systems, and frontend interfaces — turning ideas into products.",
  },
  {
    label: "My Journey",
    bg: "#DBEAFE",
    text: "#1e3a8a",
    borderColor: "#93C5FD",
    content: "Started with tutorials, got bored, started building. HimShakti. NutriScan. ParseViz. Top 15 at Code for Bharat out of 3000+ teams at Microsoft Gurugram. Each project started because something frustrated me.",
  },
  {
    label: "My Vision",
    bg: "#FEE2E2",
    text: "#7f1d1d",
    content: "ML Engineer or AI Engineer at a company building things that matter. Not just using AI as a feature — engineering the systems underneath. That's the goal everything points at.",
  },
  {
    label: "Beyond Code",
    bg: "#FEF3C7",
    text: "#78350f",
    content: "Photography. Singing. Anchoring. Writing. Exploring cultures. I'm a storyteller who codes — which is probably why every product I build is about communication in some form.",
  },
];

const CARD_WIDTH = 420;
const CARD_HEIGHT = 400;

export default function About() {
  const [current, setCurrent] = useState(0);

  const goTo = (index : number) => {
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    setCurrent(clamped);
  };

  // Calculates position for the "wheel" effect
  const getCardAnimation = (index : number, currentIndex : number) => {
    if (index === currentIndex) {
      return { x: "0%", rotate: 0, scale: 1, zIndex: 10, opacity: 1, filter: "blur(0px)" };
    } else if (index === currentIndex - 1) {
      return { x: "-85%", rotate: -12, scale: 0.85, zIndex: 5, opacity: 0.7, filter: "blur(3px)" };
    } else if (index === currentIndex + 1) {
      return { x: "85%", rotate: 12, scale: 0.85, zIndex: 5, opacity: 0.7, filter: "blur(3px)" };
    } else {
      const isLeft = index < currentIndex;
      return { x: isLeft ? "-150%" : "150%", rotate: isLeft ? -24 : 24, scale: 0.6, zIndex: 0, opacity: 0, filter: "blur(10px)" };
    }
  };

  return (
    <section
      id="About"
      className="relative py-24 overflow-hidden"
      style={{ 
        background: "linear-gradient(to bottom, #FFFFFF 0%, #EDEAE4 300px, #EDEAE4 100%)" 
      }}
    >
      <div 
        className="absolute -top-[200px] left-1/3 h-[400px] w-[500px] rounded-full bg-green-100/60 blur-[140px] pointer-events-none z-0 animate-pulse" 
      />

      <div 
        className="absolute -top-[200px] left-300 h-[400px] w-[500px] rounded-full bg-yellow-100/60 blur-[140px] pointer-events-none z-0 animate-pulse" 
      />

      <Container className="relative z-10">
        {/* Intro Text Group */}
        <div className="max-w-3xl mb-16">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="montserrat text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            style={{ color: "#9CA3AF" }}
          >
            About
          </motion.p>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bit-count text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.04em] text-shadow-md cursor-default"
            style={{ color: "#1a1a1a" }}
          >
            I build things <br />
            people actually use.
            <br />
            <span style={{ color: "#A8A29E" }}>Everything else is practice.</span>
          </motion.h2>
        </div>

       {/* 4 Trait Blobs (Blur to Focus Animation) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {traits.map(({ word, bg, desc }, i) => (
            <motion.div
              key={word}
              custom={i}
              variants={blurReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              
              // We trigger a "hover" state that gets passed down to our gradient child
              whileHover="hover" 
              
              // Standard scale hover on the parent wrapper
              className="relative rounded-3xl cursor-default transition-transform hover:scale-[1.05]"
            >
              
              {/* ✨ THE RAINBOW GLOW (Sandwiched in the back) ✨ */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 }, 
                  show: { opacity: 0 },   // Stays invisible normally
                  hover: { 
                    opacity: 0.8,         // Fades in on hover
                    rotate: [0, 360]      // Spins in a full circle
                  }
                }}
                transition={{ 
                  opacity: { duration: 0.4 },
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" } // Spins forever while hovered
                }}
                // -inset-1 makes it slightly larger than the card, blur-xl gives it the soft glow
                className="absolute -inset-1 rounded-3xl blur-xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 z-0"
              />

              {/* 📦 THE ACTUAL CARD (Sits on top, blocking the middle of the glow) */}
              <div 
                className="relative h-full w-full rounded-3xl px-6 py-8 shadow-md border border-white/40 z-10"
                style={{ backgroundColor: bg }}
              >
                <p className="bit-count text-2xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
                  {word}
                </p>
                <p className="open-sans text-[13px] leading-relaxed font-medium" style={{ color: "#44403C", opacity: 0.8 }}>
                  {desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
        
        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px w-full mb-12 origin-left" 
          style={{ backgroundColor: "#D6D3CC" }} 
        />

        {/* Carousel Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-between mb-5"
        >
          <p className="montserrat text-[10px] uppercase tracking-[0.3em]" style={{ color: "#9CA3AF" }}>
            My Story
          </p>
        </motion.div>

        {/* Tilted Wheel Carousel */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full overflow-hidden"
          style={{ paddingTop: 24, paddingBottom: 24 }}
        >
          <div
            className="relative flex justify-center items-center mx-auto"
            style={{ height: CARD_HEIGHT + 80, width: "100%" }}
          >
            <AnimatePresence initial={false}>
              {cards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className="absolute select-none rounded-[2rem] p-10 flex flex-col justify-between"
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    backgroundColor: card.bg,
                    boxShadow: i === current
                      ? "0 32px 64px -12px rgba(0,0,0,0.2)"
                      : "0 8px 24px -8px rgba(0,0,0,0.08)",
                    cursor: i === current ? "grab" : "pointer",
                  }}
                  initial={false}
                  animate={getCardAnimation(i, current)}
                  transition={{ type: "spring", stiffness: 240, damping: 26 }}
                  drag={i === current ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.08}
                  onDragEnd={(_, { offset }) => {
                    if (offset.x < -60) goTo(current + 1);
                    else if (offset.x > 60) goTo(current - 1);
                  }}
                  onClick={() => {
                    if (i !== current) goTo(i);
                  }}
                >
                  <div>
                    <p
                      className="montserrat text-[10px] uppercase tracking-[0.3em] mb-5 font-bold"
                      style={{ color: card.text, opacity: 0.45 }}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
                    </p>
                    <h3
                      className="geist-font text-4xl font-bold mb-5 tracking-tight leading-tight"
                      style={{ color: card.text }}
                    >
                      {card.label}
                    </h3>
                    <p
                      className="open-sans text-[15px] leading-[1.85]"
                      style={{ color: card.text, opacity: 0.82 }}
                    >
                      {card.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Arrows + dots on same row */}
        <div className="flex items-center justify-center gap-4 mt-3">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-105 disabled:opacity-25 disabled:hover:scale-100 text-sm"
            style={{ borderColor: "#D6D3CC", backgroundColor: "#EDEAE4", color: "#1a1a1a" }}
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: i === current ? 32 : 8,
                  backgroundColor: i === current ? "#1a1a1a" : "#D6D3CC",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === cards.length - 1}
            className="h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-105 disabled:opacity-25 disabled:hover:scale-100 text-sm"
            style={{ borderColor: "transparent", backgroundColor: "#1a1a1a", color: "#EDEAE4" }}
          >
            →
          </button>
        </div>

      </Container>
    </section>
  );
}