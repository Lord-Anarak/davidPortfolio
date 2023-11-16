"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import RoundedButton from "./common/RoundedButton";
import Magnetic from "./common/Magnetic";
import { usePathname } from "next/navigation";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const navLinks = ["About", "Work", "Contact"];
  const path = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header className="w-full absolute z-50">
      <div className="flex justify-between p-10">
        <div>
          <Link href="/" className={path === "/contact" ? "text-white" : ""}>
            360MotionStudio
          </Link>
        </div>
        <nav>
          <ul className="flex justify-between gap-10">
            {navLinks.map((link, index) => {
              const lcText = link.toLowerCase();
              return (
                <Magnetic key={index}>
                  <li
                    className={`p-2 ${
                      path === `/contact` ? "btn-navbar-c" : "btn-navbar"
                    }`}>
                    <Link
                      href={`/${lcText}`}
                      className={path === "/contact" ? "text-white" : ""}
                      onClick={() => setActive(index)}>
                      {link}
                    </Link>
                  </li>
                </Magnetic>
              );
            })}
          </ul>
        </nav>
      </div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{
          scale: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeIn", type: "tween" }}
        className={`burgerButton z-50`}
        onClick={() => setIsOpen(!IsOpen)}>
        <RoundedButton
          backgroundColor={"#334BD3"}
          className={`h-16 w-16 text-white rounded-full absolute flex items-center justify-center cursor-pointer ${
            IsOpen ? "bg-blue-700" : "bg-slate-900"
          }`}>
          <div className={`burger ${IsOpen ? "burgerActive" : ""} z-30`}></div>
        </RoundedButton>
      </motion.button>
      <AnimatePresence mode="wait">
        {IsOpen && <Sidebar closeSidebar={() => setIsOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
