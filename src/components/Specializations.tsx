"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { specializations } from "@/data/specializations";

export default function Specializations() {
  return (
    <AnimatedSection id="specializations" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Specializations"
          subtitle="Core areas where I bring the most value to products and teams."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card group rounded-2xl p-6 transition-all duration-300"
            >
              <span className="mb-4 block text-3xl">{spec.icon}</span>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {spec.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {spec.description}
              </p>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
