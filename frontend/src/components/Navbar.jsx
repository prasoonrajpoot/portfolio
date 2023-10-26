  import React from "react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import  MobileNavView from "./MobileNavView";

function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);


function ToggleButton(){
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
  )
}


  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-stone-900 ">
      <div className="cantainer mx-auto h-full px-4  flex items-center">
        <ToggleButton/>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MobileNavView/>
        )}
      </AnimatePresence>
    </nav>
  );
}


export default Navbar;
