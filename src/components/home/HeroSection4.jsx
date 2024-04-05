import React from "react";
import StoryCard from "@/components/constants/StoryCard";
import Slider from "@/components/constants/Slider";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoRemoveOutline } from "react-icons/io5";

const HeroSection4 = () => {
  return (
    <div className="flex flex-row w-full mt-32">
      <div className="w-1/2 flex flex-col items-center bg-blue-950">
        <div className="w-5/6">
          <div className="w-2/3 mt-32">
            <div className="flex flex-row items-center text-orange-400 font-semibold text-[1vw]">
              <IoRemoveOutline />
              <p className="uppercase">
                SUCCESS STORIES
              </p>
            </div>
            <p className="text-white font-semibold leading-tight text-[4vw] mt-24">
              Custom business software development
            </p>
          </div>
        </div>
        <div className="w-3/5 mt-32">
          <div className="mb-32">
            <StoryCard
              id={"01"}
              business={"Real Estate"}
              country={"Norway"}
              countryFlag={<LiaFlagUsaSolid className="text-pink-700" />}
              about={"Web App"}
              title={"Intelligent property management software"}
              detail={
                "Fazile is an intelligent and flexible property management software that gives an overview of the compnay's real estate porftoloio"
              }
            />
          </div>
          <div className="mb-32">
            <StoryCard
              id={"02"}
              business={"Real Estate"}
              country={"Norway"}
              countryFlag={<LiaFlagUsaSolid className="text-pink-700" />}
              about={"Web App"}
              title={"Intelligent property management software"}
              detail={
                "Fazile is an intelligent and flexible property management software that gives an overview of the compnay's real estate porftoloio"
              }
            />
          </div>
          <div className="mb-32">
            <StoryCard
              id={"03"}
              business={"Real Estate"}
              country={"Norway"}
              countryFlag={<LiaFlagUsaSolid className="text-pink-700" />}
              about={"Web App"}
              title={"Intelligent property management software"}
              detail={
                "Fazile is an intelligent and flexible property management software that gives an overview of the compnay's real estate porftoloio"
              }
            />
          </div>
          <div className="mb-32">
            <StoryCard
              id={"04"}
              business={"Real Estate"}
              country={"Norway"}
              countryFlag={<LiaFlagUsaSolid className="text-pink-700" />}
              about={"Web App"}
              title={"Intelligent property management software"}
              detail={
                "Fazile is an intelligent and flexible property management software that gives an overview of the compnay's real estate porftoloio"
              }
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Slider />
      </div>
    </div>
  );
};

export default HeroSection4;
