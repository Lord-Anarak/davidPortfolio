import React, { useState, useRef } from "react";
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
  const container = useRef(null);

  return (
    <motion.div ref={container} className="-mt-20 pb-20 bg-white">
      <div className="px-10 bg-white relative z-10">
        <p className="text-gray-500 text-xs">RECENT WORKS</p>
        <ul className="mt-16">
          <hr />
          {Works.map(({ title, type }, index) => (
            <li
              key={index}
              className="text-6xl text-black border-b w-full flex justify-between items-center py-10 px-5 group"
              onMouseEnter={() => setModal(prevState => ({ active: true, index: index }))}
              onMouseLeave={() => setModal(prevState => ({ active: false, index: index }))}>
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

