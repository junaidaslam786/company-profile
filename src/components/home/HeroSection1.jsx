"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Animation variants for Framer Motion
  const titleAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom.delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  const subtitleAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom.delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div
      className="hero-container h-screen w-full bg-white"
      style={{
        margin:'0'
      }}
    >
      <div
        className="text-container flex flex-col w-full"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Main title */}
        <div className="flex flex-col">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2 }}
            variants={titleAnimation}
            className="font-bold text-sky-500 uppercase tracking-wider leading-none flex justify-center"
            style={{ fontSize: "7vw" }}
          >
            Custom Software
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2 }}
            variants={titleAnimation}
            className="font-bold text-blue-950 uppercase tracking-wider leading-none flex justify-start"
            style={{ fontSize: "7vw" }}
          >
            Development
          </motion.div>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center leading-none">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-start mr-3">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.4 }}
                variants={subtitleAnimation}
                className="text-blue-950"
                style={{ fontSize: "1.5vw" }}
              >
                Custom software
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.4 }}
                variants={subtitleAnimation}
                className="text-blue-950"
                style={{fontSize: "1.5vw"}}
              >
                engineering service
              </motion.div>
            </div>

            {/* Highlighted title */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.6 }}
              variants={titleAnimation}
              className="font-bold text-blue-950 uppercase tracking-wider"
              style={{ fontSize: "7vw" }}
            >
              Company
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}