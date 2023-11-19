import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

const charAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const TextAnimation = ({ text, once, classes, textDelay, animDuration }) => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.5, once });
  const AnimTime = animDuration || 0.1;

  return (
    <>
      <motion.span className="sr-only">{text}</motion.span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: AnimTime, delayChildren: textDelay }}>
        {text.split(" ").map((word, index) => (
          <span key={index} className="inline-block">
            {word.split("").map((char, ind) => (
              <motion.span
                key={ind}
                variants={charAnimation}
                className={`inline-block ${classes}`}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </>
  );
};

export default TextAnimation;
