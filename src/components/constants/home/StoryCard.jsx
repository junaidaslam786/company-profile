import React from "react";
import { TbCircleArrowRightFilled } from "react-icons/tb";

const StoryCard = ({ id, business, country, countryFlag, about, title, detail }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col h-[70vh] justify-between items-start w-full">
        <p className="text-gray-300 text-[1vw]">[{id}]</p>
        <div className="flex flex-row items-center text-orangeColor-0 text-[1vw]">
          <p className="mr-5">{business}</p> / <div className="ml-5 mr-2 text-[1.5vw]">{countryFlag}</div>
          <p className="mr-5">{country}</p> / <p className="ml-5">{about}</p>
        </div>
        <p className="text-white text-[2.5vw]">{title}</p>
        <div className="text-gray-300 text-[1.1vw]">{detail}</div>
        <div>
          <TbCircleArrowRightFilled className="text-orangeColor-0 fill-white text-[3vw]"/>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
