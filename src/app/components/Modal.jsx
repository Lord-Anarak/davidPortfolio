import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { scaleAnimation } from "../anim";
import gsap from "gsap";

const Modal = ({ modal, works }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const videoRef = useRef(Array.from({ length: works.length }, () => null));

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Pause all videos
      works.forEach((_, i) => {
        if (videoRef.current[i]) {
          videoRef.current[i].pause();
          videoRef.current[i].currentTime = 0;
        }
      });

      // Play the video corresponding to the active modal index
      if (active && videoRef.current[index]) {
        videoRef.current[index].play();
      }
    }
  }, [index, works, active]);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "enter" : "exit"}
        className="w-96 h-80 flex justify-center items-center absolute overflow-hidden pointer-events-none z-40">
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute transition-[top] duration-500  ease-[cubic-bezier(0.76,0,0.24,1)]">
          {works.map((work, i) => {
            const { src, color } = work;

            return (
              <div
                className={`w-full h-full flex items-center justify-center ${color} px-5`}
                key={i}>
                <video
                  src={src}
                  ref={(el) => (videoRef.current[i] = el)}
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
