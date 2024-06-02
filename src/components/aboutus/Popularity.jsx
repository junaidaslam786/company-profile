import React from "react";

const Popularity = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[2vw]">
      <div className="w-full h-[40vw] md:h-[20vw] border border-blueColor-0 flex flex-col items-center justify-center">
        <p className="text-[14vw] md:text-[7vw] font-extrabold font-sans text-blueColor-0">
          7+
        </p>
        <p className="text-[3vw] md:text-[1.2vw] uppercase font-bold font-lato text-blueColor-0">
          Years in the market
        </p>
      </div>
      <div className="w-full h-[40vw] md:h-[20vw] border border-blueColor-0 flex flex-col items-center justify-center">
        <p className="text-[14vw] md:text-[7vw] font-extrabold font-sans text-blueColor-0">
          90+
        </p>
        <p className="text-[3vw] md:text-[1.2vw] uppercase font-bold font-lato text-blueColor-0">
          Successful Projects
        </p>
      </div>
      <div className="w-full h-[40vw] md:h-[20vw] border border-blueColor-0 flex flex-col items-center justify-center">
        <p className="text-[14vw] md:text-[7vw] font-extrabold font-sans text-blueColor-0">
          12+
        </p>
        <p className="text-[3vw] md:text-[1.2vw] uppercase font-bold font-lato text-blueColor-0">
          Countries
        </p>
      </div>
      <div className="w-full h-[40vw] md:h-[20vw] border border-blueColor-0 flex flex-col items-center justify-center">
        <p className="text-[14vw] md:text-[7vw] font-extrabold font-sans text-blueColor-0">
          17+
        </p>
        <p className="text-[3vw] md:text-[1.2vw] uppercase font-bold font-lato text-blueColor-0">
          Team Members
        </p>
      </div>
    </div>
  );
};

export default Popularity;
