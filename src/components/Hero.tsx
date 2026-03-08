"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import profileImage from "@/app/assets/alexandria-kharatyan.jpg";

export default function Hero() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent-light/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
                Senior UI Engineer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Alexandria{" "}
              <span className="text-gradient">Kharatyan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted lg:text-xl"
            >
              I build scalable, interactive, and accessible web interfaces with
              a strong focus on design systems, frontend architecture, and modern
              user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <button
                onClick={() => handleClick("#projects")}
                className="bg-gradient-accent glow-accent rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                View Projects
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
              >
                Download CV
              </a>
              <button
                onClick={() => handleClick("#contact")}
                className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-muted transition-all hover:border-accent/30 hover:text-white"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="glow-accent-strong relative h-64 w-64 overflow-hidden rounded-full border-2 border-accent/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <Image
                src={profileImage}
                alt="Alexandria Kharatyan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-accent/10 blur-[40px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
