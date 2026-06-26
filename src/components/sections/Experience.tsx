"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "../layout/Container";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
  },
});

const experiences = [
  {
    id: 1,
    role: "AI / Full Stack Intern",
    company: "TBI, Graphic Era",
    date: "Present",
    desc: "Developing AI-powered web applications by combining modern frontend technologies, scalable backend systems, and large language models. Working across the full lifecycle—from designing intuitive interfaces to integrating AI capabilities into production-ready products.",
    tags: ["Next.js", "TypeScript", "Python", "LLMs"],
    bg: "#DCFCE7",
    text: "#14532d",
    gradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "Excelerate",
    date: "Past",
    desc: "Worked with structured datasets to extract actionable insights and support data-driven decision-making. Developed dashboards, cleaned data, and collaborated with cross-functional remote teams to present findings through clear visualizations.",
    tags: ["Python", "Pandas", "JupyterLab", "SQL"],
    bg: "#DBEAFE",
    text: "#1e3a8a",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
  }
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number | null>(null); // Initialized to null
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  const fluidSpring = { type: "spring", stiffness: 200, damping: 20, mass: 0.8 };

  return (
    <section id="Experience" className="relative pt-15 pb-2 overflow-hidden" style={{ backgroundColor: "#EDEAE4" }}>
      {/* Mesh Gradients connecting to previous sections */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-red-200/60 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[20%] -left-[10%] w-[700px] h-[700px] bg-green-100/70 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.p variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="montserrat text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-gray-400">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="geist-font text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.04em] cursor-default text-gray-800">
            The Journey <br /> <span className="text-gray-400">So far.</span>
          </motion.h2>
        </div>

        <div className="w-full border-t border-black/10">
          {experiences.map((exp, i) => {
            const isActive = activeExp === i;
            const isHovered = hoveredExp === i && !isActive;

            return (
              <motion.div key={exp.id} layout onClick={() => setActiveExp(isActive ? null : i)} onMouseEnter={() => setHoveredExp(i)} onMouseLeave={() => setHoveredExp(null)} className="relative border-b border-black/10 cursor-pointer group" transition={fluidSpring}>
                <motion.div className="absolute -inset-x-2 md:-inset-x-6 inset-y-1 z-0 shadow-lg border" initial={false} animate={{ backgroundColor: isActive ? exp.bg : "transparent", borderColor: isActive ? exp.bg : "transparent", borderRadius: isActive ? "2rem" : "0rem", opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.98 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />
                <div className="relative z-10 py-10 md:py-12 px-4 md:px-8">
                  <motion.div layout className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <motion.h3 className="geist-font text-3xl md:text-5xl font-bold tracking-tight" animate={{ x: isHovered ? 12 : 0 }} style={{ backgroundImage: isHovered ? exp.gradient : "none", WebkitBackgroundClip: isHovered ? "text" : "initial", WebkitTextFillColor: isHovered ? "transparent" : (isActive ? exp.text : "#4B5563"), color: isActive ? exp.text : "#4B5563" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                      {exp.role}
                    </motion.h3>
                    <div className="flex items-center gap-6 mt-2 md:mt-0">
                      <motion.p className="montserrat text-[11px] font-bold tracking-[0.2em] uppercase" animate={{ color: isActive ? exp.text : "#6B7280" }} transition={{ duration: 0.4 }}>{exp.company}</motion.p>
                      <motion.div animate={{ rotate: isActive ? 180 : 0, backgroundColor: isActive ? exp.text : "transparent", color: isActive ? exp.bg : "#4B5563", borderColor: isActive ? exp.text : "#D1D5DB" }} className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300">
                        <span className="text-2xl font-light mb-1">{isActive ? "−" : "+"}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div initial={{ height: 0, opacity: 0, y: -10, filter: "blur(4px)" }} animate={{ height: "auto", opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ height: 0, opacity: 0, y: -10, filter: "blur(4px)", transition: { duration: 0.3 } }} transition={fluidSpring} className="overflow-hidden">
                        <div className="pt-8 mt-6 border-t border-black/5 flex flex-col md:flex-row gap-8 md:gap-16">
                          <div className="w-full md:w-3/4">
                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, ...fluidSpring }} className="open-sans text-[16px] md:text-[18px] leading-[1.8] font-medium mb-8" style={{ color: exp.text, opacity: 0.9 }}>{exp.desc}</motion.p>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, ...fluidSpring }} className="flex flex-wrap gap-3">
                              {exp.tags.map((tag) => <span key={tag} className="px-5 py-2 my-2 ml-2 rounded-full text-[11px] font-bold uppercase tracking-wider border hover:scale-105 transition-transform cursor-default bg-white/40 backdrop-blur-md" style={{ borderColor: exp.text, color: exp.text, opacity: 0.9 }}>{tag}</span>)}
                            </motion.div>
                          </div>
                          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...fluidSpring }} className="w-full md:w-1/4 md:text-right">
                            <p className="montserrat text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: exp.text, opacity: 0.6 }}>Timeline</p>
                            <p className="mt-2 geist-font text-xl font-semibold" style={{ color: exp.text }}>{exp.date}</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}