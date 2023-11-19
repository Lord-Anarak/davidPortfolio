"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "./common/Magnetic";
import RoundedButton from "./common/RoundedButton";
import Link from "next/link";

const getDubaiTime = () => {
  const dubaiTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Dubai",
    hour: "2-digit",
    minute: "2-digit",
  });
  return dubaiTime;
};

const Footer = () => {
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
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="flex flex-col justify-center items-center text-white relative bg-gray-950 overflow-hidden">
      <div className="pt-[250px] w-full">
        <div className="border-b-gray-500 border-b-2 pb-[90px] mx-[200px]">
          <span className="flex items-center">
            <h2 className="ml-2 text-[3vw]">Let&apos;s work</h2>
          </span>
          <h2 className="m-0 -mt-5 text-[8vw] font-semibold">together</h2>
          <motion.div
            style={{ x }}
            className="relative left-[calc(100%-400px)] top-[calc(100%-5px)]">
            <RoundedButton
              backgroundColor={"#4c00a8"}
              className="h-[180px] w-[180px] bg-blue-600 text-white rounded-full absolute flex items-center justify-center cursor-pointer">
              <p className="m-0 z-10 relative">Get in touch</p>
            </RoundedButton>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            className="absolute top-1/3 left-[90%]"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="flex gap-5 mx-[200px] mt-16">
          <RoundedButton>
            <p className="relative z-10">360motionstudio@gmail.com</p>
          </RoundedButton>
          <RoundedButton>
            <p className="relative z-10">+971 54 588 9937</p>
          </RoundedButton>
        </div>
        <div className="flex justify-between p-5 mt-24">
          <div className="flex gap-10 items-end">
            <span className="flex flex-col gap-5 ">
              <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
                Copyright
              </h3>
              <p className="m-0 p-2 cursor-pointer">2023 © Edition</p>
            </span>
            <span className="flex flex-col gap-5 ">
              <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
                Local Time
              </h3>
              <p className="m-0 p-2 cursor-pointer">{time} GMT+4</p>
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
              <Link
                href="https://instagram.com/360motionstud?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"
                target="_blank"
                className="m-0 p-2 cursor-pointer">
                Instagram
              </Link>
            </Magnetic>
            <Magnetic>
              <p className="m-0 p-2 cursor-pointer">Youtube</p>
            </Magnetic>
            <Magnetic>
              <p className="m-0 p-2 cursor-pointer">Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
