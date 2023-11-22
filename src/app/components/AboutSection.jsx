"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RoundedButton from "./common/RoundedButton";
import TextAnimation from "./common/TextAnimation";

const reveal = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const AboutSection = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        el: scrollContainer.current,
        smooth: true,
      });
    })();
  }, []);
  return (
    <section className="max-w-7xl mx-auto p-10 py-20 sm:mt-20">
      <div className="flex sm:flex-row flex-col justify-between gap-3">
        <p className="text-3xl">
          <TextAnimation
            text={
              "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."
            }
            once
            animDuration={0.02}
          />
        </p>
        <div className="w-90" ref={scrollContainer} data-scroll-section>
          <motion.p
            className="sm:mt-0 mt-5"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 2,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            }}>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>

          <div className="mt-16 pb-12" data-scroll data-scroll-speed="-0.07">
            <a href="/about">
              <RoundedButton
                backgroundColor={"#334BD3"}
                className="h-[180px] w-[180px] bg-blue-500 text-white rounded-full relative z-20 flex items-center justify-center cursor-pointer">
                <p className="m-0 z-10 relative">About</p>
              </RoundedButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
