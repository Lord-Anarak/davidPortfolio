"use client";
import React, { useRef } from "react";
import Gallery from "../components/Gallery";
import Overlay from "../components/common/Overlay";
import Footer from "../components/Footer";

const WorkPage = () => {
  const container = useRef(null);

  return (
    <div className="bg-white">
      <div className="flex h-[80vh] justify-center items-center mb-10">
        <h1 className="text-[5vw] px-[20vw] leading-tight">
          Creating Product designs that you never seen before
        </h1>
      </div>
      <div ref={container} className="relative z-20 bg-white">
        <Gallery />
      </div>
      <Overlay />
      <Footer />
    </div>
  );
};

export default WorkPage;
