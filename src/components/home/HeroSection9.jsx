"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HeroSection9 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageWidth = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      imageWidth.current = containerRef.current.offsetWidth / 5;
    }
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  return (
    <div className="w-full py-24 relative">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-[90%] text-orange-500 text-[1vw] font-semibold">
          __<p className="tracking-widest">TRUSTED BY CLIENTS</p>
        </div>
        <div className="w-[90%]">
          <p className="text-blue-950 text-[3.5vw] font-bold tracking-wide mt-10">
            Great people behind every project
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-12">
        <div className="w-[90%] overflow-hidden flex flex-row">
          <div
            className="transition-transform duration-300 ease-in-out flex"
            ref={containerRef}
            style={{
              transform: `translateX(-${
                imageWidth.current * currentImageIndex
              }px)`,
            }}
          >
            <div className="mr-9" style={{ width: "70vmin", height: "45vmin" }}>
              <Image
                src={"/images/IMG20240404132012.jpg"}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className="mr-9" style={{ width: "70vmin", height: "45vmin" }}>
              <Image
                src={"/images/IMG20240404131950.jpg"}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className="mr-9" style={{ width: "70vmin", height: "45vmin" }}>
              <Image
                src={"/images/IMG20240404132021.jpg"}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className="mr-9" style={{ width: "70vmin", height: "45vmin" }}>
              <Image
                src={"/images/IMG20240404132026.jpg"}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className="mr-9" style={{ width: "70vmin", height: "45vmin" }}>
              <Image
                src={"/images/IMG20240404132048.jpg"}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-40 bottom-5 transform -translate-y-1/2 flex items-center">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full text-white text-[1.5vw] font-bold bg-orange-500 mr-5 opacity-80 hover:opacity-100"
        >
          {" "}
          <FaArrowLeft />{" "}
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full text-white text-[1.5vw] font-bold bg-orange-500 opacity-80 hover:opacity-100"
        >
          {" "}
          <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default HeroSection9;