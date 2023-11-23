"use client";
import React, { useRef } from "react";
import Gallery from "../components/Gallery";
import Overlay from "../components/common/Overlay";
import Footer from "../components/Footer";
import TextAnimation from "../components/common/TextAnimation";

const WorkPage = () => {
  const container = useRef(null);

  return (
    <div className="bg-white">
      <div className="flex h-[80vh] justify-center items-center sm:mb-10">
        <h1 className="sm:text-[5vw] sm:px-[20vw] text-5xl px-5 uppercase">
          <TextAnimation
            text={"Creating Product designs that you never seen before"}
            once
            animDuration={0.05}
            classes={"font-['Bladus']"}
          />
        </h1>
      </div>
      <div ref={container} className="relative z-20 bg-white pb-20">
        <Gallery />
      </div>
      <Overlay />
      <Footer />
    </div>
  );
};

export default WorkPage;
