import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import Overlay from "./common/Overlay";

const Works = [
  {
    title: "Flash Energy Booster",
    type: "3D Model and Render",
    src: "/assets/Flash Energy Booster 3D Reel.mp4",
    color: "bg-yellow-100",
  },
  {
    title: "Coffee First",
    type: "3D Model and Render",
    src: "/assets/Coffee First.mp4",
    color: "bg-red-200",
  },
  {
    title: "Cosmetic Loop",
    type: "3D Model and Render",
    src: "/assets/Cosmetic Loop.mp4",
    color: "bg-orange-200",
  },
  {
    title: "Motion Graphics",
    type: "3D Model and Render",
    src: "/assets/Motion 1.mp4",
    color: "bg-slate-400",
  },
];

const Recent = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [isMobile, setIsMobile] = useState();
  const container = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <motion.div ref={container} className="-mt-20 pb-20 bg-white">
      <div className="sm:px-10 px-5 bg-white relative z-10">
        <p className="text-gray-500 text-xs">RECENT WORKS</p>
        <ul className="mt-16">
          <hr />
          {isMobile
            ? Works.map(({ title, type, src }, index) => (
                <li
                  key={index}
                  className="text-3xl text-black border-b w-full flex sm:flex-row flex-col justify-between items-center py-10 sm:px-5">
                  <div
                    className={`w-96 h-72 flex items-center justify-center px-5`}>
                    <video src={src} className="h-auto" controls />
                  </div>
                  <span className="group-hover:-translate-x-4 group-hover:text-gray-600 duration-200 ease-linear">
                    {title}
                  </span>
                  <span className="group-hover:-translate-x-4 group-hover:text-black duration-200 ease-linear text-base mt-3 sm:mt-0">
                    {type}
                  </span>
                </li>
              ))
            : Works.map(({ title, type }, index) => (
                <li
                  key={index}
                  className="text-6xl text-black border-b w-full flex sm:flex-row flex-col justify-between items-center py-10 px-5 group"
                  onMouseEnter={() =>
                    setModal((prevState) => ({ active: true, index: index }))
                  }
                  onMouseLeave={() =>
                    setModal((prevState) => ({ active: false, index: index }))
                  }>
                  <span className="group-hover:-translate-x-4 group-hover:text-gray-600 duration-200 ease-linear">
                    {title}
                  </span>
                  <span className="group-hover:-translate-x-4 group-hover:text-black duration-200 ease-linear text-xl">
                    {type}
                  </span>
                </li>
              ))}
        </ul>
      </div>

      <Modal modal={modal} works={Works} />
      <Overlay reference={container} />
    </motion.div>
  );
};

export default Recent;
