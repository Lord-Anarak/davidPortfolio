"use client";
import React from "react";
import FloatingShape from "./floatingShape/Index";
import TextAnimation from "./common/TextAnimation";

import { easeIn, motion } from "framer-motion";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const fadeDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gray-200">
      <div className="p-10 flex justify-between items-center">
        <div className="mt-40 relative z-10">
          <motion.h1
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[2vw] ml-1">
            Redefining Reality
          </motion.h1>
          <h2 className="text-[8vw] uppercase leading-tight">
            <TextAnimation
              text={"Through"}
              classes={"font-black font-['Bladus']"}
              once
            />
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="font-black font-['Bladus'] gradient-text inline-block">
              3D
            </motion.span>
            <br />
            <TextAnimation
              text={"Brilliance"}
              classes={"font-black font-['Bladus']"}
              textDelay={1}
              once
            />
          </h2>
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 3,
            }}
            className="overflow-hidden">
            <motion.p
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 2,
                delay: 2,
              }}
              className="text-xl mt-5 ml-1">
              Product Designs | Commercial Videos
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1, ease: "easeIn" }}
          className="absolute w-full h-full top-0 -right-72">
          <FloatingShape />
        </motion.div>
        <div className="absolute bottom-5 flex gap-3 items-center ml-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse duration-1000"></div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Located in Dubai
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
