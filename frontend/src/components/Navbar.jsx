import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { MobileNavView } from "./MobileNavView";
import logo from "../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import {TbBrandLeetcode} from "react-icons/tb"
function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  function ToggleButton() {
    return (
      <div className="relative z-10">
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => toggleMobileNav()}
          className="flex flex-col space-y-1"
        >
          <motion.span
            variants={{
              open: { rotate: 45, y: 5 },
              closed: { rotate: 0 },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              open: { opacity: 0 },
              closed: { rotate: 0 },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              open: { rotate: -45, y: -5 },
              closed: { rotate: 0 },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
        </motion.button>
      </div>
    );
  }

  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-stone-900 w-full border-1px-solid  ">
      <div className="cantainer mx-auto h-full px-4  w-full flex justify-between items-center">
        <div className="flex items-baseline">
          <span className="text-6xl">P</span>
          <span>rasoon Rajpoot</span>
        </div>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div className="hidden lg:flex mr-20">
          <IconLinks></IconLinks>
        </div>
        <div className=" flex lg:hidden">
          {" "}
          <ToggleButton />
        </div>
      </div>
      <AnimatePresence>{mobileNav && <MobileNavView />}</AnimatePresence>
    </nav>
  );
}

export default Navbar;

function NavLinks() {
  return (
    <ul className="flex w-full justify-around gap-[14%] text-lg  ">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/experience">Experience</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

function IconLinks() {
  return (
    <div className="flex w-full justify-around gap-[14%] text-lg ">
      <a target="_blank"
       href="https://www.linkedin.com/in/prasoonrajpoot/">
        <BsLinkedin className="w-7 h-7 rounded-md"/>
      </a>
      <a target="_blank"
       href="https://github.com/prasoonrajpoot">
        <AiOutlineGithub  className="w-7 h-7 rounded-md"/>
      </a>
      <a target="_blank"
       href="https://leetcode.com/prasoonrajpoot/">
      <TbBrandLeetcode className="w-7 h-7 rounded-md"/>
      </a>
      <a
        target="_blank"
        href="https://www.upwork.com/freelancers/~017d0ac10f47f6cf91"
      >
        <BiLogoUpwork className="w-7 h-7 rounded-md"/>
      </a>
    </div>
  );
}
