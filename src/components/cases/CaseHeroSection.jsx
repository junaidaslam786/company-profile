"use client";
import { motion } from "framer-motion";
import { IoRemoveOutline } from "react-icons/io5";
import Link from "next/link";

const CaseHeroSection = () => {
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
    <div className="hero-container h-screen flex flex-col items-center w-full bg-white">
      <div
        className="text-container flex flex-col w-[93%]"
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
            className="font-bold text-[1.5vw] text-orangeColor-0 uppercase tracking-wider leading-none flex justify-start"
          >
            <IoRemoveOutline /> Our Projects
          </motion.div>
          <div className="flex flex-row justify-between items-center mt-[7vh]">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.2 }}
              variants={titleAnimation}
              className="font-extrabold text-[6vw] text-blue-950 uppercase tracking-wider leading-none flex justify-start"
            >
              Case Studies
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.4 }}
              variants={subtitleAnimation}
              className="text-blue-950 text-[1.3vw] w-1/3"
            >
              A preview of successful partnerships and mutual vision working
              with our clients.
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.4 }}
            variants={subtitleAnimation}
            className="text-blue-950 text-[1.1vw] flex flex-start mt-[15vh]"
          >
            <Link href={"/cases"}>
              Apply filters to find the most relevant cases:
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default CaseHeroSection;
