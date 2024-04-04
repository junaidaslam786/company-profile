"use client";

import React from "react";
import ScrollCard from "@/components/constants/ScrollCard";

const Herosection2 = () => {
  return (
    <div className="flex w-full bg-white relative">
      <div className="flex flex-col items-center w-1/3 pl-6 sticky top-14 h-[80vh] ">
        <div className="w-5/6">
          <h2 className="mt-6 text-[1vw] text-orange-400 font-semibold">
            — WE PROVIDE
          </h2>
          <h5 className="text-[3.5vw] w-[12vw] font-bold text-blue-950 mt-7">
            Custom software development services
          </h5>
          <p className="text-[1.3vw] mt-6 text-blue-950">
            Full-cycle custom software services to develop unique software
            solutions.
          </p>
        </div>
      </div>
      <div className="w-2/3">
        <div className="flex">
          <div className="flex flex-col">
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
          </div>
          <div className="flex flex-col mt-[18%]">
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection2;
