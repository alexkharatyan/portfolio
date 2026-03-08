"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import { Project } from "@/types";

const badgeStyles: Record<string, string> = {
  Public: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Confidential: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Internal: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Open Source": "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="col-span-full"
    >
      <div className="relative rounded-2xl p-px bg-gradient-to-r from-accent/60 via-accent-light/40 to-accent/60">
        {/* Inner card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0d0d14] p-8 sm:p-10">
          {/* Background glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/8 blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-light/5 blur-[60px]" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
            {/* Left: icon / branding area */}
            <div className="flex shrink-0 flex-col items-center gap-3 lg:w-48">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 shadow-[0_0_30px_rgba(224,64,160,0.15)]">
                <svg className="h-9 w-9 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                </svg>
              </div>
              {project.company && (
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-light/70">
                  {project.company}
                </span>
              )}
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted/50">
                Featured Project
              </span>
            </div>

            {/* Right: content */}
            <div className="flex-1">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>
                {project.badge && (
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                      badgeStyles[project.badge] || ""
                    }`}
                  >
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {project.summary}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-accent/10 bg-accent/5 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent-light transition-all hover:bg-accent/20 hover:text-white"
                >
                  Visit {project.company || "Project"}
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-card group flex flex-col rounded-2xl p-6 transition-all duration-300"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        {project.badge && (
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
              badgeStyles[project.badge] || ""
            }`}
          >
            {project.badge}
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light transition-colors hover:text-white"
        >
          View Project
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <AnimatedSection id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Selected Projects"
          subtitle="A selection of projects I've contributed to or built."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
          {regular.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center text-sm text-muted/70"
        >
          Some projects are internal or client-confidential, so selected work
          may be presented as case-study summaries instead of public links.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
