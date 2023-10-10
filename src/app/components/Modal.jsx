import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scaleAnimation } from "../anim";

const Modal = ({ modal, works }) => {
  const { active, index } = modal;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const mouseAnimation = {
    default: {
      x: mousePosition.x - 60,
      y: mousePosition.y - 600,
    },
  };

  return (
    <motion.div
      variants={mouseAnimation}
      animate="default"
      transition={{ type: "tweet", ease: "backOut" }}>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "enter" : "exit"}
        className="w-80 h-48 flex justify-center items-center absolute overflow-hidden pointer-events-none">
        <div
          style={{ top: `${index * -100}%` }}
          className="h-full w-full absolute transition-[top] duration-500  ease-[cubic-bezier(0.76,0,0.24,1)]">
          {works.map((work, index) => {
            const { src, color } = work;
            return (
              <div
                className={`relative h-full flex items-center justify-center ${color} p-3 `}
                key={index}>
                <video src={src} autoPlay loop muted />
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
