"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../layout/Container";
import {
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiJupyter,
  SiScikitlearn,
  SiGooglegemini,
  SiPandas,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { IconType } from "react-icons";

// Refined badges matched to your warm stone & pastel theme
const tagIcons: Record<string, { icon: IconType; color: string; bg: string; border: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#18181b", bg: "rgba(255, 255, 255, 0.75)", border: "#E4E4E7" },
  "TypeScript": { icon: SiTypescript, color: "#1D4ED8", bg: "#DBEAFE", border: "#93C5FD" },
  "FastAPI": { icon: SiFastapi, color: "#047857", bg: "#DCFCE7", border: "#86EFAC" },
  "LLMs": { icon: SiGooglegemini, color: "#7C3AED", bg: "#F3E8FF", border: "#D8B4FE" },
  "PostgreSQL": { icon: SiPostgresql, color: "#1E40AF", bg: "#E0E7FF", border: "#A5B4FC" },
  "Python": { icon: SiPython, color: "#B45309", bg: "#FEF3C7", border: "#FDE68A" },
  "JupyterLab": { icon: SiJupyter, color: "#C2410C", bg: "#FFEDD5", border: "#FDBA74" },
  "EDA": { icon: SiPandas, color: "#BE185D", bg: "#FCE7F3", border: "#F472B6" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#C2410C", bg: "#FFEDD5", border: "#FB923C" },
  "SQL": { icon: TbDatabase, color: "#0369A1", bg: "#E0F2FE", border: "#7DD3FC" },
};

const experiences = [
  {
    id: 1,
    num: "[ 01 ]",
    role: "AI Assisted Full Stack Intern",
    company: "TBI, Graphic Era",
    date: "June 2026 – August 2026",
    desc: "Developed and deployed an AI-powered product management platform using Next.js, TypeScript, FastAPI, and PostgreSQL, implementing authentication, REST APIs, product CRUD, and a Google Gemini-powered description generator with prompt engineering.",
    tags: ["Next.js", "TypeScript", "FastAPI", "LLMs", "PostgreSQL"],
    orgColor: "#059669",
    glowColor: "rgba(220, 252, 231, 0.75)",
    // Vivid Forest Emerald -> Mint Sage
    accentGradient: "linear-gradient(300deg, #064e3b 0%, #059669 45%, #34d399 100%)",
  },
  {
    id: 2,
    num: "[ 02 ]",
    role: "Data Analyst Intern",
    company: "Excelerate",
    date: "March 2025 – April 2025",
    desc: "Analyzed student engagement and churn through data cleaning, EDA, feature engineering, visualization, and predictive modeling, achieving 98% accuracy with an ensemble model and developing data-driven strategies to improve student retention.",
    tags: ["Python", "JupyterLab", "EDA", "Scikit-learn", "SQL"],
    orgColor: "#2563EB",
    glowColor: "rgba(219, 234, 254, 0.75)",
    // Midnight Sapphire -> Vivid Azure -> Cyan
    accentGradient: "linear-gradient(300deg, #1e3a8a 0%, #2563eb 50%, #38bdf8 100%)",
  },
];

const slowEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
  },
});

export default function Experience() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(0);

  return (
    <section
      id="Experience"
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #EDEAE4 0%, #E7E3DC 50%, #EDEAE4 100%)",
      }}
    >
      {/* Organic Mesh Blur Orbs matching Hero & About */}
      <div
        className="absolute -top-24 -left-20 h-[500px] w-[500px] rounded-full bg-red-200/50 blur-[150px] pointer-events-none z-0 animate-pulse"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[550px] w-[550px] rounded-full bg-blue-100/60 blur-[160px] pointer-events-none z-0 animate-pulse"
        style={{ animationDuration: "14s" }}
      />
      <div
        className="absolute -bottom-20 left-1/4 h-[450px] w-[450px] rounded-full bg-green-100/60 blur-[140px] pointer-events-none z-0 animate-pulse"
        style={{ animationDuration: "16s" }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="montserrat text-[10px] font-bold uppercase tracking-[0.3em] mb-5 text-[#9CA3AF]"
          >
            INTERNSHIPS
          </motion.p>

          <motion.h2
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="bit-count text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.04em] cursor-default text-[#1a1a1a]"
          >
            The Journey <br />
            <span className="text-[#A8A29E]">So far.</span>
          </motion.h2>
        </div>

        {/* Experience Rows */}
        <div className="w-full border-t border-[#1a1a1a]/15 flex flex-col">
          {experiences.map((exp) => {
            const isHovered = hoveredExp === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout="position"
                onMouseEnter={() => setHoveredExp(exp.id)}
                onMouseLeave={() => setHoveredExp(null)}
                className="relative border-b border-[#1a1a1a]/15 cursor-pointer overflow-hidden group"
                transition={{ duration: 0.65, ease: slowEase }}
              >
                {/* Subtle Hover Backdrop Highlight */}
                <motion.div
                  className="absolute inset-0 pointer-events-none -z-10 blur-xl"
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    backgroundColor: isHovered ? exp.glowColor : "transparent",
                  }}
                  transition={{ duration: 0.7, ease: slowEase }}
                />

                <div className="py-8 md:py-8 px-2 md:px-4 relative z-10">
                  {/* Top Bar: Title & Organization */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-baseline gap-4 md:gap-8">
                      <span className="montserrat text-xs tracking-widest text-[#9CA3AF] transition-colors duration-300 group-hover:text-[#1a1a1a]">
                        {exp.num}
                      </span>

                      <motion.h3
                        animate={{ x: isHovered ? 10 : 0 }}
                        transition={{ duration: 0.1, ease: slowEase }}
                        className="bit-count text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-all duration-300"
                        style={{
                          backgroundImage: isHovered ? exp.accentGradient : "none",
                          WebkitBackgroundClip: isHovered ? "text" : "initial",
                          WebkitTextFillColor: isHovered ? "transparent" : "#1a1a1a",
                          color: isHovered ? "transparent" : "#1a1a1a",
                        }}
                      >
                        {exp.role}
                      </motion.h3>
                    </div>

                    <div className="flex items-center gap-4 pl-8 md:pl-0">
                      <div className="text-right">
                        <motion.p
                          animate={{ color: isHovered ? exp.orgColor : "#44403C" }}
                          transition={{ duration: 0.4, ease: slowEase }}
                          className="montserrat text-xs md:text-sm font-bold uppercase tracking-[0.12em] transition-colors"
                        >
                          {exp.company}
                        </motion.p>
                        <p className="montserrat text-[10px] text-[#78716C] tracking-wide mt-0.5">
                          {exp.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Drawer */}
                  <AnimatePresence initial={false}>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.85, ease: slowEase },
                            opacity: { duration: 0.5, delay: 0.15, ease: slowEase },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.85, ease: slowEase },
                            opacity: { duration: 0.25 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-6 mt-4 pl-8 md:pl-16 max-w-3xl border-t border-[#1a1a1a]/10">
                          {/* Description in open-sans */}
                          <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.45, delay: 0.15, ease: slowEase }}
                            className="open-sans text-sm md:text-[15px] leading-[1.8] text-[#44403C] font-normal mb-6"
                          >
                            {exp.desc}
                          </motion.p>

                          {/* Tech Blobs */}
                          <div className="flex flex-wrap items-center gap-2.5">
                            {exp.tags.map((tag, tagIndex) => {
                              const meta = tagIcons[tag];
                              const IconComponent = meta?.icon;

                              return (
                                <motion.div
                                  key={tag}
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 0.2 + tagIndex * 0.05,
                                    ease: slowEase,
                                  }}
                                  whileHover={{
                                    scale: 1.06,
                                    borderColor: meta?.color || "#1a1a1a",
                                    boxShadow: "0 4px 14px -2px rgba(0,0,0,0.06)",
                                    transition: { duration: 0.2 },
                                  }}
                                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-sm cursor-default origin-center transition-all"
                                  style={{
                                    backgroundColor: meta?.bg || "#FFFFFF",
                                    borderColor: meta?.border || "#E7E5E4",
                                  }}
                                >
                                  {IconComponent && (
                                    <IconComponent
                                      className="text-xs"
                                      style={{ color: meta?.color || "#1a1a1a" }}
                                    />
                                  )}
                                  <span
                                    className="montserrat text-[11px] font-bold tracking-wide"
                                    style={{ color: meta?.color || "#1a1a1a" }}
                                  >
                                    {tag}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>
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