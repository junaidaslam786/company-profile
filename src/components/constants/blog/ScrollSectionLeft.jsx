import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const ScrollSectionLeft = ({ src, dateTime, title, time, href }) => {
  return (
    <Link href={href} className="w-full h-full lg:h-[70vh] mb-[10vh] lg:mb-0 flex flex-col">
      <div className="w-full h-full">
        <Image
          src={src}
          width={500}
          height={500}
          alt={"Image Failed to Load"}
          className="w-screen h-[50vw] lg:h-[25vw]"
        />
      </div>
      <div className="h-2/3 w-full flex flex-col">
        <div className="w-full flex flex-row items-center justify-between mt-[3vh]">
          <p className="uppercase text-blueColor-0 text-[1.5vw] lg:text-[0.8vw]">
            {time}
          </p>
          <p className="uppercase text-blueColor-0 text-[1.5vw] lg:text-[0.8vw]">
            {dateTime}
          </p>
        </div>
        <p className="text-[3vw] lg:text-[2vw] mt-[3vh] text-center leading-tight text-blueColor-0 font-bold">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ScrollSectionLeft;
