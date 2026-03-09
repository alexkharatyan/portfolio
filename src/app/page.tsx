"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import TechStack from "@/components/TechStack";
import AIWorkflow from "@/components/AIWorkflow";
import Articles from "@/components/Articles";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specializations />
        <TechStack />
        <AIWorkflow />
        <Articles />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
