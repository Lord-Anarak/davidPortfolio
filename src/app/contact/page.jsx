"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import Magnetic from "../components/common/Magnetic";
import RoundedButton from "../components/common/RoundedButton";

const getDubaiTime = () => {
  const dubaiTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Dubai",
    hour: "2-digit",
    minute: "2-digit",
  });
  return dubaiTime;
};

const ContactPage = () => {
  const formRef = useRef();
  const container = useRef(null);

  const [time, setTime] = useState(getDubaiTime());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(getDubaiTime());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-100, 400]);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <div
        className="sm:px-32 px-5 py-52 bg-slate-900 flex sm:flex-row flex-col justify-between"
        ref={container}>
        <div className="sm:w-[73%]">
          <h1 className="sm:text-[5vw] leading-tight text-4xl text-white ">
            Let&apos;s Start a Project together
          </h1>
          <form action="" ref={formRef} className="mt-10 sm:p-10 relative">
            <label className="flex flex-col sm:py-12 py-6 sm:gap-6 gap-3 text-slate-300 border-t border-slate-500">
              <span className="flex items-center">
                01
                <span className="sm:ml-10 ml-5 sm:text-3xl text-xl">
                  What is your name?
                </span>
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Abraham*"
                className="sm:ml-16 ml-9 bg-transparent border-none outline-none sm:placeholder:text-xl placeholder:text-base"
                required
              />
            </label>
            <label className="flex flex-col sm:py-12 py-6 sm:gap-6 gap-3 text-slate-300 border-t border-slate-500">
              <span className="flex items-center">
                02
                <span className="sm:ml-10 ml-5 sm:text-3xl text-xl">
                  What is your email?
                </span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com*"
                className="sm:ml-16 ml-9 bg-transparent border-none outline-none sm:placeholder:text-xl placeholder:text-base"
                required
              />
            </label>
            <label className="flex flex-col sm:py-12 py-6 sm:gap-6 gap-3 text-slate-300 border-t border-slate-500">
              <span className="flex items-center">
                03
                <span className="sm:ml-10 ml-5 sm:text-3xl text-xl">
                  Your message?
                </span>
              </span>
              <textarea
                rows="7"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Introduction and the service that you are looking for"
                className="sm:ml-16 ml-9 bg-transparent border-none outline-none sm:placeholder:text-xl placeholder:text-base resize-none"
                required
              />
            </label>
            <motion.div
              style={{ x }}
              className="absolute left-[calc(100%-500px)] top-[calc(90%-5px)]">
              <RoundedButton
                backgroundColor={"#334BD3"}
                className="sm:h-[180px] sm:w-[180px] h-28 w-28 bg-blue-500 text-white rounded-full absolute flex items-center justify-center cursor-pointer">
                <p className="m-0 z-10 relative">Send</p>
              </RoundedButton>
            </motion.div>
          </form>
        </div>
        <div className="w-[27%] flex flex-col justify-start relative mt-20 sm:mt-0">
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
      <div className="flex sm:flex-row flex-col-reverse gap-5 sm:gap-0 justify-between p-3 sm:p-5 bg-slate-900">
        <div className="flex gap-10 sm:items-end justify-between">
          <span className="flex flex-col sm:gap-5 ">
            <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
              Copyright
            </h3>
            <p className="m-0 p-2 cursor-pointer text-white">2023 © Edition</p>
          </span>
          <span className="flex flex-col sm:gap-5 ">
            <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400 sm:text-start text-end">
              Local Time
            </h3>
            <p className="m-0 p-2 cursor-pointer sm:text-start text-end text-white">
              {time} GMT+4
            </p>
          </span>
        </div>
        <div className="flex sm:gap-10 items-end">
          <span className="flex flex-col sm:gap-5 ">
            <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
              socials
            </h3>
            <Magnetic>
              <Link
                href="https://www.facebook.com/people/360-Motion-Studio/100092259304482/"
                target="_blank"
                className="m-0 p-2 cursor-pointer text-white">
                Facebook
              </Link>
            </Magnetic>
          </span>
          <Magnetic>
            <Link
              href="https://instagram.com/360motionstud"
              target="_blank"
              className="m-0 p-2 cursor-pointer text-white">
              Instagram
            </Link>
          </Magnetic>
          <Magnetic>
            <p className="m-0 p-2 cursor-pointer text-white">Youtube</p>
          </Magnetic>
          <Magnetic>
            <Link
              href="https://www.linkedin.com/in/david-kotoka-913782231"
              target="blank"
              className="m-0 p-2 cursor-pointer text-white">
              Linkedin
            </Link>
          </Magnetic>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
