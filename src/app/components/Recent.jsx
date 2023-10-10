import React, { useState } from "react";
import Modal from "./Modal";

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
    color: "bg-slate-200",
  },
];

const Recent = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className="max-w-7xl mx-auto px-10 -mt-20">
      <p className="text-gray-500 text-sm">RECENT WORKS</p>
      <ul className="mt-16">
        <hr />
        {Works.map(({ title, type }, index) => (
          <li
            key={index}
            className="text-6xl text-gray-600 border-b w-full flex justify-between items-center py-10 px-5 group"
            onMouseEnter={() => setModal({ active: true, index: index })}
            onMouseLeave={() => setModal({ active: false, index: index })}>
            <span className="group-hover:-translate-x-4 group-hover:text-black duration-200 ease-linear">
              {title}
            </span>
            <span className="group-hover:-translate-x-4 group-hover:text-black duration-200 ease-linear text-xl">
              {type}
            </span>
          </li>
        ))}
      </ul>
      <Modal modal={modal} works={Works} />
    </section>
  );
};

export default Recent;
