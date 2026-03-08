"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { techStack } from "@/data/techStack";

const categoryColors: Record<string, string> = {
  framework: "border-pink-500/30 bg-pink-500/5",
  language: "border-violet-500/30 bg-violet-500/5",
  styling: "border-cyan-500/30 bg-cyan-500/5",
  tooling: "border-amber-500/30 bg-amber-500/5",
  architecture: "border-emerald-500/30 bg-emerald-500/5",
  design: "border-rose-500/30 bg-rose-500/5",
};

export default function TechStack() {
  return (
    <AnimatedSection id="tech-stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with daily."
        />

        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className={`cursor-default rounded-xl border px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-200 hover:text-white ${
                categoryColors[tech.category] || "border-white/10 bg-white/5"
              }`}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
