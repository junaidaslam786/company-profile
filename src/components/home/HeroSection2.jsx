"use client";

import React, { useState, useEffect } from "react";
import ScrollCard from "@/components/constants/home/ScrollCard";
import { IoRemoveOutline } from "react-icons/io5";

const Herosection2 = () => {
  const [scrollCards, setScrollCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/services/");
        const data = await response.json();
        setScrollCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white relative">
      <div className="flex flex-col items-center w-full md:w-1/3 pl-6 md:sticky md:top-[8vh] h-[40vh] md:h-[80vh] ">
        <div className="w-5/6">
          <div className="flex flex-row items-center text-orange-500 text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">WE PROVIDE</p>
          </div>
          <h5 className="text-[3.5vw] w-full font-bold leading-tight text-blue-950 mt-7">
            Custom software development services
          </h5>
          <p className="text-[1.3vw] mt-6 text-blue-950">
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
                  <ScrollCard
                    key={card.id}
                    title={card.name}
                    content={card.description}
                    bottoms={index === scrollCards.length - 1 ? '' : 'border-b'}
                  />
                );
              }
            })}
          </div>
          <div className="w-full md:w-1/2 mt-0 md:mt-[8vw]">
            {scrollCards.map((card, index) => {
              if (index % 2 !== 0) {
                return (
                  <ScrollCard
                    key={card.id}
                    title={card.name}
                    content={card.description}
                    bottoms={index === scrollCards.length - 2 ? '' : 'border-b'}
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

export default Herosection2;
