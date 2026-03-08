"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { artworks, categories } from "@/data/artworks";

export default function ArtworksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState<
    (typeof artworks)[number] | null
  >(null);

  const filtered =
    activeCategory === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="text-gradient">AK</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-sm font-medium text-white">Artworks</span>
          </div>
        </div>
      </nav>

      <main className="min-h-screen pt-20">
        {/* Hero / Intro section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-accent-light/5 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
                Art & Illustration
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                My <span className="text-gradient">Artworks</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Beyond code, I express creativity through colored pencil
                illustrations inspired by animation, movies, and original
                characters. Each piece is hand-drawn with attention to detail,
                color, and emotion.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="https://www.instagram.com/alexandria_art_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-pink-500/30 hover:bg-pink-500/5 hover:text-white"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.pinterest.com/alexandria_art_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-red-500/30 hover:bg-red-500/5 hover:text-white"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
                Pinterest
              </a>
            </motion.div>
          </div>
        </section>

        {/* Category filter */}
        <section className="sticky top-[65px] z-40 border-b border-white/5 bg-[#0a0a0f]/90 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-accent/15 text-accent-light"
                      : "text-muted hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 text-xs opacity-50">
                      {artworks.filter((a) => a.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              layout
              className="columns-1 gap-5 sm:columns-2 lg:columns-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((artwork) => (
                  <motion.div
                    key={artwork.key}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 break-inside-avoid"
                  >
                    <button
                      onClick={() => setSelectedArtwork(artwork)}
                      className="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-white/2 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(224,64,160,0.08)] text-left"
                    >
                      <div className="relative w-full">
                        <Image
                          src={artwork.image}
                          alt={artwork.name}
                          width={600}
                          height={800}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="p-5">
                            <p className="text-xs font-medium uppercase tracking-wider text-accent-light">
                              {artwork.category}
                            </p>
                            <h3 className="mt-1 text-lg font-semibold text-white">
                              {artwork.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="py-20 text-center text-muted">
                No artworks in this category yet.
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative flex items-center justify-center bg-black/30 lg:max-w-[60%]">
                  <Image
                    src={selectedArtwork.image}
                    alt={selectedArtwork.name}
                    width={800}
                    height={1000}
                    className="max-h-[70vh] w-auto object-contain lg:max-h-[85vh]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center p-6 lg:max-w-[40%] lg:p-8">
                  <span className="mb-2 text-xs font-medium uppercase tracking-widest text-accent-light">
                    {selectedArtwork.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedArtwork.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {selectedArtwork.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-muted/60">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                    Colored pencil on paper
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm text-muted">
            All artworks are original hand-drawn illustrations by Alexandria Kharatyan.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted hover:text-white transition-colors">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
