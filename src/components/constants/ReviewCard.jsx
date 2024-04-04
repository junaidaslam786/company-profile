import React from "react";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <div className="w-full h-[50vh] group cursor-pointer flex flex-col items-center">
      <div className="w-5/6 h-full flex flex-row justify-between items-center">
        <div className="w-2/3 h-full flex flex-col border-b py-10 items-start justify-between">
          <button className="text-blue-950 bg-sky-200 text-[0.9vw] font-medium px-4 py-3 rounded-full">
            COST ESTIMATION
          </button>
          <p className="text-[2vw] text-blue-950 font-medium tracking-tight">
            What I provide is totally expensive and you can't afford it. You're
            poor. You're broke
          </p>
          <p className="text-[1.2vw] text-gray-500 tracking-tight">
            Ohh! I've been drinking more alchohol for the past five days. Did
            you check on me? Did you look for me? Kaash tu aise aaye. Jaise koi
            dua
          </p>
          <div className="w-full flex flex-row justify-between">
            <p className="text-[0.9vw] text-blue-950">APRIL 04, 2024</p>
            <p className="text-[0.9vw] text-blue-950">15 MINUTES READ</p>
          </div>
        </div>
        <div className="w-1/4 flex flex-col items-end justify-end">
          <div className="w-full">
            <Image
              width={500}
              height={500}
              src={"/images/IMG_20240324_172624.jpg"}
              className="w-1/4 h-1/4 opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
