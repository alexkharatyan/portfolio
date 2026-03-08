"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <AnimatedSection id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" />

        <div className="mx-auto max-w-3xl">
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a Senior UI Engineer with extensive experience in building
              rich, interactive web interfaces at scale. My work centers on
              creating intuitive user experiences that are both visually polished
              and technically robust.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I specialize in <span className="text-white">design systems</span>,{" "}
              <span className="text-white">frontend architecture</span>, and{" "}
              <span className="text-white">component-driven development</span>.
              I believe great UI is built on a foundation of accessibility,
              performance, and maintainability — where every interaction feels
              intentional and every component is built to last.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Across every role, I&apos;ve focused on raising the bar for UI
              quality — whether that means establishing component libraries,
              optimizing rendering performance, or mentoring teams on modern
              frontend practices.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
