import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { scaleAnimation } from "../anim";
import gsap from "gsap";

const Modal = ({ modal, works }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const videoRef = useRef(null);

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
          {works.map((work, index) => {
            const { src, color } = work;

            return (
              <div
                className={`w-full h-full flex items-center justify-center ${color} px-5`}
                key={index}>
                <video
                  src={src}
                  autoPlay={true}
                  loop={true}
                  muted
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
