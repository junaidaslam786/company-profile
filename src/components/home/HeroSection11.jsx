"use client";
import { motion } from "framer-motion";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HeroSection11 = () => {
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
      className="hero-container relative h-[80vh] w-full bg-white"
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
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.2 }}
              variants={titleAnimation}
              className="font-extrabold text-[7vw] text-blueColor-0 mr-5 uppercase tracking-wider leading-none flex justify-center"
            >
              Let's work
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.2 }}
              variants={titleAnimation}
              className="text-orangeColor-0 text-[7vw] flex justify-center"
            >
              <BsArrowRightCircleFill className="transition-transform transform -rotate-45" />
            </motion.div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center leading-none mt-5">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-start mr-3">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.4 }}
                variants={subtitleAnimation}
                className="text-blueColor-0 text-[1.5vw]"
              >
                Have an idea?
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.4 }}
                variants={subtitleAnimation}
                className="text-blueColor-0 text-[1.5vw]"
              >
                Let's build it!
              </motion.div>
            </div>

            {/* Highlighted title */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.6 }}
              variants={titleAnimation}
              className="font-extrabold text-[7vw] text-blueColor-0 uppercase tracking-wider"
            >
              Together
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection11;
