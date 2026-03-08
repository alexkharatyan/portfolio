"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#hero");
          }}
          className="text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">AK</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const section = item.href.replace("#", "");
            const isActive = activeSection === section;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-white/5"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            );
          })}
          <li>
            <Link
              href="/artworks"
              className="rounded-lg bg-accent/10 px-3 py-2 text-sm font-medium text-accent-light transition-all hover:bg-accent/20 hover:text-white"
            >
              Artworks
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => {
                const section = item.href.replace("#", "");
                const isActive = activeSection === section;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.href);
                      }}
                      className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-white/5 text-white"
                          : "text-muted hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/artworks"
                  className="block rounded-lg bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent-light transition-all hover:bg-accent/20 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Artworks
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
