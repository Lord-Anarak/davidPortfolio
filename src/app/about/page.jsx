"use client";
import React, { useEffect, useRef } from "react";
import Overlay from "../components/common/Overlay";
import Footer from "../components/Footer";

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
      <div className="flex h-[80vh] justify-center items-center mb-10">
        <h1 className="text-[5vw] px-[20vw] leading-tight">
          Empowering brands to excel in the digital realm
        </h1>
        <hr />
      </div>
      <div className="bg-white relative z-10" data-scroll-container>
        <div className="flex justify-between relative max-w-7xl mx-auto">
          <div className="w-1/4 ml-32">
            <p className="text-justify">
              I assist companies globally by providing custom-tailored
              solutions. With every project, I push the boundaries of my craft,
              prioritizing quality above all else.
            </p>
            <svg
              className="scale-125 mt-10 float-right"
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
            className="w-2/4 h-[80vh] overflow-hidden"
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
