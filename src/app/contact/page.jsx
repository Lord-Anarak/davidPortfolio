"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Magnetic from "../components/common/Magnetic";
import RoundedButton from "../components/common/RoundedButton";

const ContactPage = () => {
  const formRef = useRef();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <div
        className="px-32 py-52 bg-slate-900 flex justify-between"
        ref={container}>
        <div className="w-[73%]">
          <h1 className="text-[5vw] text-white ">
            Let&apos;s Start a Project together
          </h1>
          <form action="" ref={formRef} className="mt-10 p-10 relative">
            <label className="flex flex-col py-12 gap-6 text-slate-300 border-t border-slate-500">
              <span className="flex items-center">
                01
                <span className="ml-10 text-3xl">What is your name?</span>
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Abraham*"
                className="ml-16 bg-transparent border-none outline-none placeholder:text-xl"
                required
              />
            </label>
            <label className="flex flex-col py-12 gap-6 text-slate-300 border-t border-slate-500">
              <span className="flex items-center">
                02
                <span className="ml-10 text-3xl">What is your name?</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com*"
                className="ml-16 bg-transparent border-none outline-none placeholder:text-xl"
                required
              />
            </label>
            <label className="flex flex-col py-12 gap-6 text-slate-300 border-t border-slate-500">
              <span className="flex items-center">
                03
                <span className="ml-10 text-3xl">What is your name?</span>
              </span>
              <textarea
                rows="7"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Introduction and the service that you are looking for"
                className="ml-16 bg-transparent border-none outline-none placeholder:text-xl resize-none"
                required
              />
            </label>
            <motion.div
              style={{ x }}
              className="absolute left-[calc(100%-500px)] top-[calc(90%-5px)]">
              <RoundedButton
                backgroundColor={"#334BD3"}
                className="h-[180px] w-[180px] bg-blue-500 text-white rounded-full absolute flex items-center justify-center cursor-pointer">
                <p className="m-0 z-10 relative">Send</p>
              </RoundedButton>
            </motion.div>
          </form>
        </div>
        <div className="w-[27%] flex flex-col justify-start relative">
          <h2 className="text-white mt-5">Portfolio</h2>
          <svg
            className="absolute top-20 left-5 scale-125"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between p-5 bg-slate-900 text-white">
        <div className="flex gap-10 items-end">
          <span className="flex flex-col gap-5 ">
            <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
              Version
            </h3>
            <p className="m-0 p-2 cursor-pointer">2022 © Edition</p>
          </span>
          <span className="flex flex-col gap-5 ">
            <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
              Local Time
            </h3>
            <p className="m-0 p-2 cursor-pointer">11:49 PM GMT+2</p>
          </span>
        </div>
        <div className="flex gap-10 items-end">
          <span className="flex flex-col gap-5 ">
            <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
              socials
            </h3>
            <Magnetic>
              <p className="m-0 p-2 cursor-pointer">Facebook</p>
            </Magnetic>
          </span>
          <Magnetic>
            <p className="m-0 p-2 cursor-pointer">Instagram</p>
          </Magnetic>
          <Magnetic>
            <p className="m-0 p-2 cursor-pointer">Youtube</p>
          </Magnetic>
          <Magnetic>
            <p className="m-0 p-2 cursor-pointer">Linkedin</p>
          </Magnetic>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
