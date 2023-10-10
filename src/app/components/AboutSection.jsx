"use client";
import React from "react";
import { animate, motion } from "framer-motion";

const reveal = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-10 py-20 mt-20">
      <div className="flex justify-between gap-3">
        <p className="text-3xl">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </p>
        <div className="w-90">
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, type: "tween" }}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>

          <div className="mt-20">
            <a href="/about">
              <div className="w-40 h-40 rounded-full bg-slate-900 flex justify-center items-center">
                <span className="text-white">About</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
