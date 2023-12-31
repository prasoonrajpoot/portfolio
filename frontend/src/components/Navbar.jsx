import React from "react";
import { useState } from "react";
import data from "../constants/data.js";
import {HashLink as Link} from "react-router-hash-link";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { MobileNavView } from "./MobileNavView";
import logo from "../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";

function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
 
  
  function ToggleButton() {
    return (
      <div className="relative z-10">
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => toggleMobileNav(!mobileNav)}
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
    <nav className="sticky top-0 inset-x-0  bg-stone-900 w-full ">
      <div className="cantainer mx-auto h-full px-4  w-full flex justify-between items-center">
        <div className="flex items-baseline">
          <motion.span 
          whileHover={{ scale: 1.5, y : 5 }}
          className="text-6xl underlineText colorText hover:text-5xl">P</motion.span>
          <motion.span 
          whileHover={{ scale: 1.5, x: 15}}
          className=" colorText text-xl hidden md:flex">rasoon Rajpoot</motion.span>
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
      <AnimatePresence>{mobileNav && <MobileNavView toggleMobileNav = {toggleMobileNav}  />}</AnimatePresence>
    </nav>
  );
}

export default Navbar;

function NavLinks() {
  return (
    <ul className="flex w-full justify-around gap-[14%] text-lg  ">
      {data["navLinks"].map((link) => {
        return (
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link className="colorText underlineText" to={link.to}>{link.name}</Link>
          </motion.li>
        );
      } )}
    </ul>
  );
}

function IconLinks() {
  return (
    <div className="flex w-full justify-around gap-[14%] text-lg ">
      <motion.a
        whileHover={{ scale: 1.2 }}
        target="_blank"
        href="https://www.linkedin.com/in/prasoonrajpoot/"
      >
        <BsLinkedin className="w-7 h-7 rounded-md" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        target="_blank"
        href="https://github.com/prasoonrajpoot"
      >
        <AiOutlineGithub className="w-7 h-7 rounded-md" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        target="_blank"
        href="https://leetcode.com/prasoonrajpoot/"
      >
        <TbBrandLeetcode className="w-7 h-7 rounded-md" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        target="_blank"
        href="https://www.upwork.com/freelancers/~017d0ac10f47f6cf91"
      >
        <BiLogoUpwork className="w-7 h-7 rounded-md " />
      </motion.a>
    </div>
  );
}
