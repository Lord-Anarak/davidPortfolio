"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Recent from "./components/Recent";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="">
      <Hero />
      <AboutSection />
      <Recent />
      <Footer />
    </main>
  );
}
