"use client";
import React, { useEffect, useRef } from "react";
import Overlay from "../components/common/Overlay";
import Footer from "../components/Footer";
import TextAnimation from "../components/common/TextAnimation";
import { motion } from "framer-motion";

const AboutPage = () => {
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
    <div className="bg-white">
      <div className="flex h-[80vh] justify-center items-center sm:mb-8">
        <h1 className="sm:text-[5vw] text-5xl sm:px-[20vw] mx-5 uppercase">
          <TextAnimation
            text={"Elevating brands to thrive in the digital domain"}
            once
            animDuration={0.05}
            classes={"font-['Bladus']"}
          />
        </h1>
        <hr />
      </div>
      <div className="bg-white relative z-10" data-scroll-container>
        <div className="flex sm:flex-row flex-col justify-between relative max-w-7xl mx-auto">
          <div className="sm:w-1/4 sm:ml-32 mx-5 sm:mx-0">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
              className="text-justify">
              I assist companies globally by providing custom-tailored
              solutions. With every project, I push the boundaries of my craft,
              prioritizing quality above all else.
            </motion.p>
            <svg
              className="scale-125 mt-10 sm:float-right"
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            className="sm:w-2/4 h-[80vh] mt-5 sm:mt-0 overflow-hidden"
            ref={scrollContainer}
            data-scroll-section>
            <img
              data-scroll
              data-scroll-speed="-0.3"
              src="assets/davidprof.jpg"
              alt="Profile_pic"
              className="w-full h-auto -mt-60"
            />
          </div>
        </div>
      </div>
      <Overlay />
      <Footer />
    </div>
  );
};

export default AboutPage;
