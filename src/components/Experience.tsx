"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in frontend development."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent sm:left-8" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-1.5 flex h-5 w-5 items-center justify-center sm:left-6">
                  <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(224,64,160,0.4)]" />
                  <div className="absolute h-5 w-5 rounded-full border border-accent/30" />
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-accent-light">
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-muted">
                    {exp.company}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
