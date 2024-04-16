"use client";
import { motion } from "framer-motion";
import { IoRemoveOutline } from "react-icons/io5";
import Link from "next/link";

const Event = () => {
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
    <div className="hero-container h-[60vh] w-full bg-white">
      <div
        className="text-container flex flex-col w-[90%]"
        style={{
          position: "absolute",
          top: "35%",
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
            className="font-bold text-[1.5vw] text-orangeColor-0 uppercase tracking-wider leading-none flex justify-start"
          >
            <IoRemoveOutline /> Community Activities
          </motion.div>
          <div className="flex flex-row justify-between items-center mt-[7vh]">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.2 }}
              variants={titleAnimation}
              className="font-bold text-[5.5vw] text-blueColor-0 uppercase tracking-wider leading-none flex justify-start"
            >
              Events
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.4 }}
              variants={subtitleAnimation}
              className="text-blueColor-0 text-[1.3vw] w-2/5"
            >
              We love to organize events to share our knowledge and experience
              in software development and everything related. Would be great to
              see you there!
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
