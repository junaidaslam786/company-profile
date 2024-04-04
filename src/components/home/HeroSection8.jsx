"use client";

import React, { useState, useRef, useEffect } from "react";
import RecommendationCard from "@/components/constants/RecommendationCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const HeroSection8 = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardRef = useRef(null);
  const cardWidth = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && cardRef.current) {
      cardWidth.current = cardRef.current.offsetWidth;
      containerRef.current.style.width = `${cardWidth.current * 5}px`;
    }
  }, []);

  const handleNext = () => {
    const nextIndex = (currentCardIndex + 1) % 5;
    setCurrentCardIndex(nextIndex);
    containerRef.current.style.transform = `translateX(-${
      cardWidth.current * nextIndex
    }px)`;
  };

  const handlePrevious = () => {
    const prevIndex = currentCardIndex === 0 ? 4 : currentCardIndex - 1;
    setCurrentCardIndex(prevIndex);
    containerRef.current.style.transform = `translateX(-${
      cardWidth.current * prevIndex
    }px)`;
  };

  return (
    <div className="w-full py-24 relative">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col items-center w-[90%]">
          <div className="flex flex-row w-full text-orange-500 text-[1vw] font-semibold">
            __<p className="tracking-widest">TRUSTED BY CLIENTS</p>
          </div>
          <div className="w-5/6">
            <p className="text-blue-950 text-[3.5vw] font-bold tracking-wide mt-10">
              Our clients recommend us
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-12">
        <div className="w-4/5 overflow-hidden flex flex-row">
          <div
            className="transition-transform duration-300 ease-in-out flex"
            ref={containerRef}
          >
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                rating={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                }
                content={
                  "'Their dedication and responsible attitude to work have proven that our choice was right.'"
                }
                company={"VP R&D, Guidde Knowledge LTD"}
                date={"01 / 03"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                rating={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                }
                content={
                  "'The team has impressed us the most as they provided a solid foundation of expertise in our business domain.'"
                }
                company={"Co-Founder & CTO, Ladingo"}
                date={"02 / 05"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                rating={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                }
                content={
                  "'Labverse has been a fantastic partner so far an we will continue to use them on our development journey.'"
                }
                company={"Founder, Co-Working Space Startup"}
                date={"03 / 05"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                rating={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                }
                content={
                  "'At Labverse, we have met professional software developers who have done their work responsibly and competently.'"
                }
                company={"CTO, Shinez.io"}
                date={"04 / 05"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                rating={
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                }
                content={
                  "'Labverse's team has impressed us with their level of involvement in the project.'"
                }
                company={"CEO, Xtra Point Group"}
                date={"05 / 05"}
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
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full text-white text-[1.5vw] font-bold bg-orange-500 opacity-80 hover:opacity-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection8;
