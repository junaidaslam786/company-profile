import React from "react";
import { IoRemoveOutline } from "react-icons/io5";

const Mission = () => {
  return (
    <div className="w-full flex flex-col py-[20vw] md:py-[7vw]">
      <div className="flex flex-col items-center w-[90%]">
        <div className="w-full flex flex-row items-center text-orangeColor-0 text-[3vw] md:text-[1.2vw] font-semibold">
          <IoRemoveOutline />
          <p className="tracking-widest uppercase">Our Mission</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-[10vw] md:py-[5vw]">
        <div className="w-[90%] md:w-2/3">
          <p className="text-[5vw] md:text-[3vw] text-center text-blueColor-0 font-bold font-sans">
            We deliver peace of mind through high-quality software. Your project
            benefits from predictable costs, on-time delivery, and a smooth,
            collaborative development process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
