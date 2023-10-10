"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [Active, setActive] = useState(0);
  const [IsOpen, setIsOpen] = useState(false);
  const navLinks = ["About", "Work", "Contact"];

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
    <header className="w-full absolute">
      <div className="max-w-7xl mx-auto flex justify-between p-10">
        <div>
          <Link href="/">Portfolio</Link>
        </div>
        <nav>
          <ul className="flex justify-between gap-10">
            {navLinks.map((link, index) => {
              const lcText = link.toLowerCase();
              return (
                <li key={index}>
                  <Link href={`/${lcText}`}>{link}</Link>
                </li>
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
        className={`burgerButton duration-300 z-10 ${
          IsOpen ? "bg-purple-700" : "bg-slate-900"
        }`}
        onClick={() => setIsOpen(!IsOpen)}
      >
        <div className={`burger ${IsOpen ? "burgerActive" : ""}`}></div>
      </motion.button>
      <AnimatePresence mode="wait">{IsOpen && <Sidebar />}</AnimatePresence>
    </header>
  );
};

export default Header;
