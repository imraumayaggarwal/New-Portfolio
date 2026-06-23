"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  },
});

const Tag = ({ text }: { text: string }) => (
  <span className="montserrat text-[9px] uppercase tracking-[0.15em] text-zinc-400 border border-zinc-200 rounded-full px-3 py-1">
    {text}
  </span>
);

const experiences = [
  {
    type: "Current · Internship",
    role: "AI-Assisted Full Stack Developer",
    company: "Technology Business Incubator · Graphic Era University",
    date: "2025 – Present",
    dateColor: "text-emerald-500 border-emerald-200",
    description:
      "Building AI-powered full stack applications at GEU's startup incubator — working at the intersection of LLMs, backend systems, and frontend interfaces.",
    tags: ["Next.js", "FastAPI", "LLMs", "AI Integration"],
    accent: "bg-emerald-400",
  },
  {
    type: "Completed · Internship",
    role: "Data Analyst Associate Intern",
    company: "Excelerate · Remote",
    date: "Mar – Apr 2025",
    dateColor: "text-zinc-400 border-zinc-200",
    description:
      "Transformed raw data into actionable insights. Built dashboards in Looker Studio, performed EDA, and developed data-driven presentations for stakeholders.",
    tags: ["Data Analysis", "Looker Studio", "EDA", "Visualization"],
    accent: "bg-blue-300",
  },
  {
    type: "Hackathon · National Finals",
    role: "Code for Bharat — Top 15 / 3000+",
    company: "Microsoft Gurugram",
    date: "2024",
    dateColor: "text-zinc-400 border-zinc-200",
    description:
      "Built Simpl3fy — a personal finance management app — and reached the national finals at Microsoft's Gurugram office out of 3000+ registrations.",
    tags: ["Simpl3fy", "Fintech", "React", "National Finals"],
    accent: "bg-violet-300",
  },
];

export default function Experience() {
  return (
    <section
      id="Experience"
      className="relative py-32 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-50/50 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-50/40 blur-[180px]" />
      </div>

      <Container>

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="montserrat text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-10"
        >
          Experience
        </motion.p>

        {/* Cards — vertical stack */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              variants={fadeUp(0.08 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                group
                relative
                rounded-3xl
                border border-zinc-100
                bg-white/60
                backdrop-blur-sm
                p-8
                hover:border-zinc-200
                hover:shadow-sm
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {/* Accent bar — left edge, colored per card */}
              <div className={`absolute left-0 top-6 bottom-6 w-[3px] rounded-full ${exp.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="pl-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <p className="montserrat text-[9px] uppercase tracking-[0.25em] text-zinc-400 mb-2">
                      {exp.type}
                    </p>
                    <h3 className="geist-font text-2xl font-medium text-gray-700 tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="open-sans text-sm text-zinc-400 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className={`montserrat text-[9px] uppercase tracking-[0.15em] border rounded-full px-3 py-1 whitespace-nowrap self-start ${exp.dateColor}`}>
                    {exp.date}
                  </span>
                </div>

                <p className="open-sans text-[14px] text-zinc-500 leading-[1.85] mb-5 max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}