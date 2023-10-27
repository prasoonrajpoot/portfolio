import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";
import { AiOutlineGithub} from "react-icons/ai";
import {TbBrandLeetcode} from "react-icons/tb";
import data from "../constants/data.js";

export function NavLinks() {
  return (
    <ul className="space-y-5">
      {data["navLinks"].map((link) => {
        return (
          <motion.li
      whileHover={{ scale: 1.1, x : 20 }}>
        <motion className="text-4xl font-bold colorText hover:text-6xl underlineText">
          <Link to = {link.to} >{link.name} </Link>
        </motion>
      </motion.li>
        )
      })}

    </ul>
  );
}

export function MobileNavView() {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.25,
      }}
    >
      <motion.div
        variants={{
          open: {
            x: "0%",
            transition: {
              when: "beforeChildren",
            },
          },
          closed: {
            x: "-100%",
            transition: {
              when: "afterChildren",
            },
          },
        }}
        initial="closed"
        animate="open"
        key="mobile-nav"
        exit="closed"
        className="fixed inset-0 bg-blue-600 space-y-10 p-6 cantainer mx-auto flex
           flex-col flex-col justify-center "
      >
        <motion.div
          variants={{
            open: { y: "0%", opacity: 1 },
            closed: { y: "25%", opacity: 0 },
          }}
        >
          <NavLinks />
        </motion.div>
        <motion.div
          variants={{
            open: { y: "0%", opacity: 1 },
            closed: { y: "25%", opacity: 0 },
          }}
          className="w-full h-px bg-white"
        ></motion.div>
        <motion.div
          variants={{
            open: { y: "0%", opacity: 1 },
            closed: { y: "25%", opacity: 0 },
          }}
          className=""
        >
          <ul className="flex items-center gap-x-5 justify-center ">
            <motion.li whileHover={{ scale: 1.4 }}>
              <div className="w-10 h-10 rounded-lg ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/prasoonrajpoot/"
                >
                  <BsLinkedin className="w-full h-full"></BsLinkedin>
                </a>
              </div>
            </motion.li>
            <motion.li whileHover={{ scale: 1.4 }}>
              <div className="w-10 h-10 rounded-lg ">
                <a target="_blank" href="https://github.com/prasoonrajpoot">
                  <AiOutlineGithub className="w-full h-full"></AiOutlineGithub>
                </a>
              </div>
            </motion.li>
            <motion.li whileHover={{ scale: 1.4 }}>
              <div className="w-10 h-10 rounded-lg ">
                <a target="_blank" href="https://leetcode.com/prasoonrajpoot/">
                  <TbBrandLeetcode className="w-full h-full"></TbBrandLeetcode>

                </a>
              </div>
            </motion.li>
            <motion.li 
            whileHover={{ scale: 1.4 }}>
              <div className="w-10 h-10 rounded-lg">
                <a
                  target="_blank"
                  href=" https://www.upwork.com/freelancers/~017d0ac10f47f6cf91"
                >
                  <BiLogoUpwork className="w-full h-full" />
                </a>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
