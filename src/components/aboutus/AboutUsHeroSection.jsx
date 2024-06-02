"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoRemoveOutline } from "react-icons/io5";

const AboutUsHeroSection = () => {
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
      <Image
        src={"/images/634e812eaf4208d64d22f870_try_wormhole.svg"}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        className="w-full h-full absolute"
      />
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
            <IoRemoveOutline /> About Us
          </motion.div>
          <div className="flex flex-row justify-between items-center mt-[7vh]">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.2 }}
              variants={titleAnimation}
              className="font-extrabold text-[6vw] text-blue-950 uppercase tracking-wider leading-none flex justify-start"
            >
              Software Solution Made Simple
            </motion.div>
          </div>
          <div className="w-full flex flex-row justify-end mt-[7vh]">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.4 }}
              variants={subtitleAnimation}
              className="text-blue-950 text-[1.3vw] w-1/2 font-lato"
            >
              Labverse empowers businesses with comprehensive software
              solutions. They achieve this by offering full-cycle development
              services, tackling projects of any complexity to deliver turnkey
              solutions.
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsHeroSection;
