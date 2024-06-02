import React from "react";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import Image from "next/legacy/image";

const StoryCard = ({
  id,
  business,
  country,
  countryFlag,
  serviceTypes,
  title,
  detail,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col h-[70vh] justify-between items-start w-full">
        <p className="text-gray-300 text-[1vw]">[{id}]</p>
        <div className="flex flex-row items-center text-orangeColor-0 text-[1vw]">
          <p className="mr-[1.2vw] text-[0.9vw] uppercase">{business}</p> /
          <Image
            src={countryFlag}
            alt="Image failed to load"
            width={30}
            height={30}
            className="ml-[1.2vw] mr-2 shadow w-[1.53vw] h-[1.11vw]"
          />
          <p className="mr-[1.2vw] text-[0.9vw] uppercase">{country}</p> /{" "}
          <p className="ml-[2.2vw] text-[0.9vw] uppercase">
            {serviceTypes.map((service) => service.choice_name).join(", ")}
          </p>
        </div>
        <p className="text-white text-[2.5vw]">{title}</p>
        <div className="text-gray-300 text-[1.1vw]">{detail}</div>
        <div>
          <TbCircleArrowRightFilled className="text-orangeColor-0 fill-white text-[3vw]" />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
