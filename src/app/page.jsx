"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Recent from "./components/Recent";
import { useEffect } from "react";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
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
