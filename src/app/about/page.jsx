"use client";
import React, { useEffect, useRef } from "react";
import Overlay from "../components/common/Overlay";
import Footer from "../components/Footer";
import TextAnimation from "../components/common/TextAnimation";
import { motion } from "framer-motion";

const process = [
  {
    index: 1,
    title: "Conceptualization and Briefing",
    desc: "Engage in deep dialogue to craft a strategic blueprint, ensuring alignment and clarity of vision from inception.",
  },
  {
    index: 2,
    title: "Modeling",
    desc: "We meticulously sculpt digital landscapes, breathing life into your concepts with precision and artistry.",
  },
  {
    index: 3,
    title: "Texturing and Shading",
    desc: "Infusing vibrancy and depth, we meticulously craft textures and shades to enrich visual storytelling.",
  },
  {
    index: 4,
    title: "Rigging and Animation",
    desc: "Infusing static models with dynamic movement, we animate stories to captivate and enchant your audience.",
  },
  {
    index: 5,
    title: "Rendering",
    desc: "Harnessing cutting-edge technology, we meticulously refine every detail to produce visually stunning and lifelike imagery.",
  },
  {
    index: 6,
    title: "Compositing",
    desc: "Seamlessly merging elements into cohesive narratives, we create immersive worlds that transport your audience.",
  },
  {
    index: 7,
    title: "Review and Feedback",
    desc: "Foster collaborative dialogue, inviting input to refine and elevate the creative vision to its fullest potential.",
  },
  {
    index: 8,
    title: "Final Output",
    desc: "Delivering a polished masterpiece, meticulously crafted to inspire and resonate with your audience, leaving a lasting impression.",
  },
];

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
        <div className="flex sm:flex-row flex-col justify-between gap-20 relative max-w-7xl mx-auto">
          <div className="sm:w-1/2 sm:ml-32 mx-5 sm:mx-0">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
              className="text-justify"
            >
              At 360 Motion Studio, we're not just another production company –
              we're your digital revolutionaries, redefining brand storytelling
              through mesmerizing 3D product commercials.
            </motion.p>
            <svg
              className="scale-125 mt-5 sm:float-right"
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="black"
              />
            </svg>
            <div className="mt-16 flex items-center gap-5">
              <p className="text-justify">
                Imagine your brand soaring above the digital landscape, leaving
                audiences captivated and craving more. That's our mission at 360
                Motion Studio. With a blend of innovation and imagination, we
                bring your products to life like never before.
              </p>
              <h2 className="text-sm [writing-mode:vertical-lr] font-semibold uppercase justify-center">
                Vision
              </h2>
            </div>
            <div className="mt-16 flex items-center gap-5">
              <p className="text-justify">
                Collaboration is key. We dive deep into your brand's DNA,
                crafting tailor-made solutions that resonate with your audience
                and drive real results. From conceptualization to execution,
                we're with you every step of the way.
              </p>
              <h2 className="text-sm [writing-mode:vertical-lr] font-semibold uppercase justify-center">
                Approach
              </h2>
            </div>
          </div>
          <div
            className="sm:w-1/2 h-[80vh] mt-5 sm:mt-0 overflow-hidden"
            ref={scrollContainer}
            data-scroll-section
          >
            <img
              data-scroll
              data-scroll-speed="-0.3"
              src="assets/designing.jpg"
              alt="Profile_pic"
              className="w-full h-auto -mt-10"
            />
          </div>
        </div>
        <div>
          <h1 className="text-center text-4xl font-bold">Process</h1>
          <div className="mt-16">
            <ul className="grid sm:grid-cols-2 grid-cols-1 px-[16vw] gap-20 pb-10">
              {process.map(({ index, title, desc }) => (
                <li
                  key={index}
                  className="border border-black p-10 group relative"
                >
                  <h2 className="flex items-center gap-10 text-lg group-hover:text-white transition-colors duration-500">
                    <span className="font-['Bladus'] text-7xl">0{index}</span>{" "}
                    {title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-3">{desc}</p>
                  <span className="absolute top-0 left-0 w-full h-full max-h-[10px] group-hover:max-h-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -z-10 bg-black"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Overlay />
      <Footer />
    </div>
  );
};

export default AboutPage;
