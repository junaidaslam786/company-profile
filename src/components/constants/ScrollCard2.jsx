import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const ScrollCard2 = ({ title, para, bottoms }) => {
  return (
    <div className={`relative group flex flex-row justify-center items-center ${bottoms} border-l border-gray-600 h-80 w-full`}>
      <div className="absolute inset-0 z-0">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/IMG_20240324_172624.jpg"
          alt="Background Image"
          className="opacity-0 group-hover:opacity-30 transition-opacity duration-1000"
        />
      </div>
      <Link href="/" className="p-4 flex flex-col items-center relative z-10">
        <div className="absolute right-10 -mt-6 group-hover:opacity-100 transition-opacity">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[1.5vw] transition-transform transform -rotate-45 text-white group-hover:rotate-0 group-hover:text-orange-500"
          />
        </div>
        <div className="w-5/6">
          <h3 className="group-hover:text-orange-500 font-semibold text-[2vw] text-white">{title}</h3>
          <p className="mt-2 text-gray-400 text-[1vw]">{para}</p>
        </div>
      </Link>
    </div>
  );
};

export default ScrollCard2;
