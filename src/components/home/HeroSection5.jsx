"use client";

import React, { useState, useEffect } from "react";
import ScrollCard2 from "@/components/constants/home/ScrollCard2";
import { IoRemoveOutline } from "react-icons/io5";

const Herosection5 = () => {
  const [scrollCards, setScrollCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/companyinformation/");
        const data = await response.json();
        setScrollCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full bg-blue-950 relative py-32">
      <div className="flex flex-col items-center w-1/3 pl-6 sticky top-[8vh] h-[80vh] ">
        <div className="w-5/6">
          <div className="flex flex-row items-center text-orange-400 text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">Companies we serve</p>
          </div>
          <h5 className="text-[3.5vw] w-[12vw] leading-tight font-bold text-white mt-7">
            Custom software development services
          </h5>
          <p className="text-[1.3vw] mt-6 text-gray-400">
            Full-cycle custom software services to develop unique software
            solutions.
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {scrollCards.map((card, index) => {
              if (index % 2 === 0) {
                return (
                  <ScrollCard2
                    key={card.id}
                    title={card.vision}
                    content={card.mission}
                    src={'/images/b07e0ebccccfcba7c2801f90a44e6158.jpg'}
                    bottoms={index === scrollCards.length - 1 ? "" : "border-b"}
                  />
                );
              }
            })}
          </div>
          <div className="w-full md:w-1/2 mt-0 md:mt-[8vw]">
            {scrollCards.map((card, index) => {
              if (index % 2 !== 0) {
                return (
                  <ScrollCard2
                    key={card.id}
                    title={card.vision}
                    content={card.mission}
                    src={'/images/b07e0ebccccfcba7c2801f90a44e6158.jpg'}
                    bottoms={index === scrollCards.length - 2 ? "" : "border-b"}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection5;
