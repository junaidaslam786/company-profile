"use client";

import React from "react";
import ScrollCard2 from "@/components/constants/ScrollCard2";

const Herosection5 = () => {
 
  return (
    <div className="flex w-full bg-blue-950 relative py-32">
      <div className="flex flex-col items-center w-1/3 pl-6 sticky top-14 h-[80vh] ">
        <div className="w-5/6">
          <h2 className="mt-6 text-[1vw] text-orange-400 font-semibold">
            — INDUSTRIES WE SERVE
          </h2>
          <h5 className="text-[3.5vw] w-[12vw] font-bold text-white mt-7">
            Custom software development services
          </h5>
          <p className="text-[1.3vw] mt-6 text-gray-400">
            Full-cycle custom software services to develop unique software
            solutions.
          </p>
        </div>
      </div>
      <div className="w-2/3">
        <div className="flex">
          <div className="flex flex-col">
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
          </div>
          <div className="flex flex-col mt-[18%]">
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard2
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection5;