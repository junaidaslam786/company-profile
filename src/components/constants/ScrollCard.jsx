import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ScrollCard = ({ title, para, bottoms }) => {
  return (
    <div className={`flex flex-row justify-center items-center ${bottoms} border-l h-80 w-full`}>
      <Link href="/" className="p-4 group flex flex-col items-center relative z-10">
        <div className="absolute right-10 -mt-6 group-hover:opacity-100 transition-opacity">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[1.5vw] transition-transform transform -rotate-45 text-gray-600 group-hover:rotate-0 group-hover:text-orange-500"
          />
        </div>
        <div className="w-5/6">
          <h3 className="group-hover:text-orange-500 font-semibold text-[2vw] text-blue-950">{title}</h3>
          <p className="mt-2 text-gray-500 text-[1vw]">{para}</p>
        </div>
      </Link>
    </div>
  );
};

export default ScrollCard;