import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

function MobileNavView(){
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
                  <ul className="space-y-5">
                    <li>
                      <Link to="/" className="text-4xl font-bold">
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-4xl font-bold">
                        {" "}
                        About{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/experience" className="text-4xl font-bold">
                        {" "}
                        Experience{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/project" className="text-4xl font-bold">
                        {" "}
                        Projects{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-4xl font-bold">
                        {" "}
                        Contact{" "}
                      </Link>
                    </li>
                  </ul>
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
                    <li>
                      <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                    </li>
                    <li>
                      <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                    </li>
                    <li>
                      <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </MotionConfig>
    )
  }

  export default MobileNavView;