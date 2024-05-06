import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Highlights = ({title, blogType, authorImage, author, role, date, timeToRead, featuredImage}) => {
  return (
    <div className="w-full h-[65vh] flex flex-row justify-between items-center">
      <div className="w-[55%] h-full flex flex-col items-start justify-between">
        <p className="uppercase text-[0.8vw] font-medium text-blueColor-0 py-[0.9vw] px-[1.8vw] bg-blue-100 rounded-full">
          {blogType}
        </p>
        <p className="uppercase text-blueColor-0 text-[3.9vw] font-extrabold leading-none">
          {title}
        </p>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="group cursor-pointer flex flex-col">
            <div className="w-full flex flex-row items-center">
              <div>
                <Image
                  src={authorImage}
                  width={50}
                  height={50}
                  alt={"Image Failed to Load"}
                  className="w-[3.5vw] h-[3.5vw] rounded-full"
                />
              </div>
              <div className="ml-[1vw]">
                <p className="text-[0.9vw] text-blueColor-0 font-medium">
                  {author}
                </p>
                <p className="uppercase text-[0.9vw]">{role}</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <p className="uppercase group-hover:text-sky-500 text-[0.9vw] mt-[1vw] font-semibold text-blueColor-0">
                Learn about the author
              </p>
              <FaArrowRight className="text-[1vw] transition-transform transform -rotate-45 group-hover:rotate-0 ml-[0.5vw] duration-300 mt-[0.8vw] text-blueColor-0 group-hover:text-sky-500" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-[0.9vw] uppercase text-blueColor-0 font-medium mr-[1vw]">
              {date}
            </p>
            <p className="text-[0.9vw] uppercase text-blueColor-0 font-medium mr-[1vw]">
              /
            </p>
            <p className="text-[0.9vw] uppercase text-blueColor-0 font-medium">
              {timeToRead}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <Image
          src={featuredImage}
          width={500}
          height={500}
          alt={"Image Failed to Load"}
          className="w-[30vw] h-[20vw]"
        />
      </div>
    </div>
  );
};

export default Highlights;
