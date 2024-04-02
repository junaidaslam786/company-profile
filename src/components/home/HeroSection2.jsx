"use client";

import React from "react";
import ScrollCard from "../constants/ScrollCard";

const Herosection2 = () => {
 
  return (
    <div className="flex w-full bg-white relative">
      <div className= "w-1/3 pl-6 block sticky top-14 h-[80vh] ">
        <h2
          className="mt-6"
          style={{ fontSize: "1vw", color: "#ff9a54", fontWeight: "600" }}
        >
          — WE PROVIDE
        </h2>
        <h5 style={{ fontSize: "3.5vw", width: "12vw", fontWeight: "700" }}>
          Custom software development services
        </h5>
        <p>
          Full-cycle custom software services to develop unique software
          solutions.
        </p>
      </div>
      <div className="w-2/3">
        <div className="flex">
          <div className="flex flex-col">
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
          </div>
          <div className="flex flex-col mt-24">
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <ScrollCard
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
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