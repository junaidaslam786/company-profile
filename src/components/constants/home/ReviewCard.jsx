import React from "react";
import Image from "next/image";

const ReviewCard = ({src, main, content, date, time }) => {
  return (
    <div className="w-full h-[50vh] group cursor-pointer border-b md:border-none flex flex-col items-center">
      <div className="w-5/6 h-full flex flex-col md:flex-row md:justify-between items-center">
        <div className="w-full md:w-2/3 h-[30vw] md:h-full flex flex-col md:border-b py-[2vw] items-start justify-between">
          <button className="text-blueColor-0 bg-sky-200 text-[2vw] md:text-[0.9vw] font-medium px-[2vw] py-[1.5vw] md:px-[1.5vw] md:py-[1vw] rounded-full">
            COST ESTIMATION
          </button>
          <p className="text-[3.5vw] md:text-[2vw] text-blueColor-0 font-semibold md:font-medium tracking-tight">
            {main}
          </p>
          <p className="text-[2vw] md:text-[1.2vw] line-clamp-2 text-gray-500 tracking-tight">
            {content}
          </p>
          <div className="w-full flex flex-row justify-between">
            <p className="text-[1.5vw] md:text-[0.9vw] uppercase text-blueColor-0">{date}</p>
            <p className="text-[1.5vw] md:text-[0.9vw] uppercase text-blueColor-0">{time}</p>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="w-full flex flex-col items-center">
            <Image
              width={500}
              height={500}
              src={src}
              className="w-[53vw] h-[30vw] mt-[5vw] md:mt-0 md:w-1/4 md:h-1/4 md:opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
