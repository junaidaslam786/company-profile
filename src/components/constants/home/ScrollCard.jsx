import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const ScrollCard = ({ title, content, bottoms }) => {
  return (
    <Link
      href="/"
      className={`flex flex-row group justify-center items-center ${bottoms} border-l h-[25vw] w-full`}
    >
      <div className="p-[1vw] w-full flex flex-col items-center relative z-10">
        <div className="absolute right-[8vw] md:right-[2vw] -mt-[2.4vh] group-hover:opacity-100 transition-opacity">
          <FaArrowRight className="text-[2.5vw] md:text-[1.5vw] transition-transform transform -rotate-45 text-gray-600 group-hover:rotate-0 group-hover:text-orangeColor-0" />
        </div>
        <div className="w-5/6">
          <h3 className="group-hover:text-orangeColor-0 font-semibold text-[4vw] md:text-[2vw] text-blueColor-0">
            {title}
          </h3>
          <p className="mt-[1vh] text-gray-500 text-[2vw] md:text-[1vw]">{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default ScrollCard;
