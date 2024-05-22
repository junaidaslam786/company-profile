"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const [topPosition, setTopPosition] = useState("50%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTopPosition("30%");
      } else {
        setTopPosition("50%");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      className="hero-container h-[60vh] md:h-screen w-full"
      style={{
        margin: "0",
      }}
    >
      <Image
        src={"/images/634e812eaf4208d64d22f870_try_wormhole.svg"}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        className="w-full h-full absolute"
      />
      <div
        className="text-container flex flex-col w-[90%]"
        style={{
          position: "absolute",
          top: topPosition,
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
            className="font-extrabold text-[7.2vw] text-skyColor-0 uppercase tracking-wider leading-none flex justify-center"
          >
            Custom Software
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2 }}
            variants={titleAnimation}
            className="font-extrabold text-[7.2vw] text-blueColor-0 uppercase tracking-wider leading-none flex justify-start"
          >
            Development
          </motion.div>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center leading-none">
          <div className="flex flex-row items-center">
            <div className="flex flex-col font-medium tracking-tight font-lato items-start mr-3">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.4 }}
                variants={subtitleAnimation}
                className="text-blueColor-0 text-[1.5vw]"
              >
                Custom software
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.4 }}
                variants={subtitleAnimation}
                className="text-blueColor-0 text-[1.5vw]"
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
              className="font-extrabold text-[7.2vw] text-blueColor-0 uppercase tracking-wider"
            >
              Company
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
