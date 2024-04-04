"use client";

import React, { useState, useRef, useEffect } from "react";
import RecommendationCard from "@/components/constants/RecommendationCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
    if (currentCardIndex < 4) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      containerRef.current.style.transform = `translateX(-${
        cardWidth.current * (currentCardIndex + 1)
      }px)`;
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
      containerRef.current.style.transform = `translateX(-${
        cardWidth.current * (currentCardIndex - 1)
      }px)`;
    }
  };

  return (
    <div className="w-full py-24 relative">
      <div className="w-full flex flex-col items-center">
        <div
          className="w-4/5 overflow-hidden flex flex-row"
          style={{ scrollbarWidth: "none" }}
        >
          <div
            className="transition-transform duration-300 ease-in-out flex"
            ref={containerRef}
          >
            <div className="mx-9" ref={cardRef}>
              <RecommendationCard
                content={
                  "'Their dedication and responsible attitude to work have proven that our choice was right.'"
                }
                company={"VP R&D, Guidde Knowledge LTD"}
                date={"01 / 03"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                content={
                  "'The team has impressed us the most as they provided a solid foundation of expertise in our business domain.'"
                }
                company={"Co-Founder & CTO, Ladingo"}
                date={"02 / 05"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                content={
                  "'Labverse has been a fantastic partner so far an we will continue to use them on our development journey.'"
                }
                company={"Founder, Co-Working Space Startup"}
                date={"03 / 05"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
                content={
                  "'At Labverse, we have met professional software developers who have done their work responsibly and competently.'"
                }
                company={"CTO, Shinez.io"}
                date={"04 / 05"}
              />
            </div>
            <div className="mr-9" ref={cardRef}>
              <RecommendationCard
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
          disabled={currentCardIndex === 0}
        >
          {" "}
          <FaArrowLeft />{" "}
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full text-white text-[1.5vw] font-bold bg-orange-500 opacity-80 hover:opacity-100"
          disabled={currentCardIndex === 4}
        >
          {" "}
          <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default HeroSection8;