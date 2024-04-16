import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const ScrollCard2 = ({ title, content, bottoms, src }) => {
  return (
    <Link
      href={"/"}
      className={`relative group flex flex-row justify-center items-center ${bottoms} border-l border-gray-600 h-[25vw] w-full`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          layout="fill"
          objectFit="cover"
          src={src}
          alt="Background Image"
          className="opacity-0 group-hover:opacity-30 transition-opacity duration-1000"
        />
      </div>
      <div className="p-[1vw] flex flex-col items-center relative z-10">
        <div className="absolute right-[2vw] -mt-[2.4vh] group-hover:opacity-100 transition-opacity">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[1.5vw] transition-transform transform -rotate-45 text-white group-hover:rotate-0 group-hover:text-orangeColor-0"
          />
        </div>
        <div className="w-5/6">
          <h3 className="group-hover:text-orangeColor-0 font-semibold text-[2vw] text-white">
            {title}
          </h3>
          <p className="mt-[1vh] text-gray-400 text-[1vw]">{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default ScrollCard2;
