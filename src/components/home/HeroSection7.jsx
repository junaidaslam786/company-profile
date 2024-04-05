import React from "react";
import AnimationCard from "@/components/constants/home/AnimationCard";
import { IoRemoveOutline } from "react-icons/io5";

const HeroSection7 = () => {
  return (
    <div className="w-full flex flex-col items-center bg-blue-950 pt-32 pb-10">
      <div className="flex flex-col w-full items-center mb-[12vh]">
        <div className="flex flex-col w-4/5">
          <div className="flex flex-row items-center text-orange-400 text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">Advantages</p>
          </div>
          <div className="flex flex-row justify-between items-center mt-16">
            <p className="text-white text-[3.5vw] font-bold">
              Why choose Labverse?
            </p>
            <p className="w-1/4 text-slate-300 text-[1.1vw] tracking-tight">
              Our custom software development agency helps our clients transform
              their business ideas into tangible results by developing unique
              software solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="flex flex-col items-start z-[1]">
          <div>
            <AnimationCard
              id={"01"}
              title={"RESULT-ORIENTED PROCESS"}
              content={
                "Our structured development processes ensure on-time solutions delivery"
              }
              hoveredColor={"hover:bg-orange-400"}
            />
          </div>
        </div>
        <div className="flex flex-col items-end -mt-[15%] z-[2]">
          <AnimationCard
            id={"02"}
            title={"RESULT-ORIENTED PROCESS"}
            content={
              "Our structured development processes ensure on-time solutions delivery"
            }
            hoveredColor={"hover:bg-sky-500"}
          />
        </div>
        <div className="flex flex-col items-start -mt-[15%] z-[3]">
          <AnimationCard
            id={"03"}
            title={"RESULT-ORIENTED PROCESS"}
            content={
              "Our structured development processes ensure on-time solutions delivery"
            }
            hoveredColor={"hover:bg-red-400"}
          />
        </div>
        <div className="flex flex-col items-end -mt-[15%] z-[4]">
          <AnimationCard
            id={"04"}
            title={"RESULT-ORIENTED PROCESS"}
            content={
              "Our structured development processes ensure on-time solutions delivery"
            }
            hoveredColor={"hover:bg-purple-500"}
          />
        </div>
        <div className="flex flex-col items-start -mt-[15%] z-[5]">
          <AnimationCard
            id={"05"}
            title={"RESULT-ORIENTED PROCESS"}
            content={
              "Our structured development processes ensure on-time solutions delivery"
            }
            hoveredColor={"hover:bg-green-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection7;
