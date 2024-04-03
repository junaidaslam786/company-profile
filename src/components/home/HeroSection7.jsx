import React from "react";
import AnimationCard from "@/components/constants/AnimationCard";

const HeroSection7 = () => {
  return (
    <div className="w-full flex flex-col items-center bg-blue-950 pt-32">
      <div className="w-3/4">
        <AnimationCard
          id={"01"}
          title={"RESULT-ORIENTED PROCESS"}
          content={
            "Our structured development processes ensure on-time solutions delivery"
          }
        />
      </div>
    </div>
  );
};

export default HeroSection7;
