import React from "react";
import ReviewCard from "../constants/ReviewCard";

const HeroSection10 = () => {
  return (
    <div className="w-full mt-32">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-[90%] text-orange-500 text-[1vw] font-semibold">
          __<p className="tracking-widest">BLOG</p>
        </div>
        <div className="w-[90%]">
          <p className="text-blue-950 text-[3.5vw] font-bold tracking-wide mt-10">
            Tech insights collected for you
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default HeroSection10;
