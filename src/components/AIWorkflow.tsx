"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { aiWorkflowItems } from "@/data/aiWorkflow";

export default function AIWorkflow() {
  return (
    <AnimatedSection id="ai-workflow" className="relative py-24">
      {/* Subtle gradient accent */}
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/3 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          title="AI in My Workflow"
          subtitle="How I use AI in modern frontend development."
        />

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-muted leading-relaxed">
            I actively use modern AI tools to accelerate prototyping,
            refactoring, documentation, and creative exploration — while keeping
            engineering judgment, quality, and user experience at the center.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiWorkflowItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="mb-4 block text-3xl">{item.icon}</span>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
