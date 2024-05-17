"use client";

import React, { useState, useEffect } from "react";
import ScrollCard2 from "@/components/constants/home/ScrollCard2";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const Herosection5 = () => {
  const [scrollCards, setScrollCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/industries/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Modify the data to include up to 8 items and ensure the number is even
        const evenCount = Math.min(data.length, 8);
        setScrollCards(data.slice(0, evenCount % 2 === 0 ? evenCount : evenCount - 1));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (scrollCards.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="flex w-full relative py-32">
      <div className="flex flex-col items-center w-1/3 pl-6 sticky top-[8vh] h-[80vh]">
        <div className="w-5/6">
          <div className="flex flex-row items-center text-orangeColor-0 text-[1vw] font-semibold">
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
            {scrollCards.filter((_, index) => index % 2 === 0).map((card, index) => (
              <ScrollCard2
                key={card.id}
                title={card.name}
                content={card.description}
                src={card.image}
                bottoms={index === scrollCards.length / 2 - 1 ? "" : "border-b"}
              />
            ))}
          </div>
          <div className="w-full md:w-1/2 mt-0 md:mt-[8vw]">
            {scrollCards.filter((_, index) => index % 2 !== 0).map((card, index) => (
              <ScrollCard2
                key={card.id}
                title={card.name}
                content={card.description}
                src={card.image}
                bottoms={index === scrollCards.length / 2 - 1 ? "" : "border-b"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection5;
