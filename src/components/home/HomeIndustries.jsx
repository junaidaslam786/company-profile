"use client";

import React, { useState, useEffect } from "react";
import ScrollCard2 from "@/components/constants/home/ScrollCard2";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HomeIndustries = () => {
  const [scrollCards, setScrollCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/industries/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const evenCount = Math.min(data.length, 8);
        setScrollCards(
          data.slice(0, evenCount % 2 === 0 ? evenCount : evenCount - 1)
        );
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
    <div className="flex flex-col md:flex-row w-full relative py-[8vw]">
      <div className="flex flex-col items-center w-full md:w-1/3 md:pl-[1.5vw] md:sticky md:top-[8vh] md:h-[80vh]">
        <div className="w-5/6">
          <div className="flex flex-row items-center text-orangeColor-0 text-[2.5vw] md:text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">Industries we serve</p>
          </div>
          <h5 className="text-[7vw] md:text-[3.5vw] w-full leading-tight font-bold text-white mt-[1.7vw]">
            We are experts in
          </h5>
          <p className="text-[3vw] md:text-[1.3vw] mt-[1.5vw] text-gray-400">
            Our custom software development firm offers developing
            industry-focused solutions based on our solid expertise.
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3 mt-[15vw] md:mt-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {scrollCards
              .filter((_, index) => index % 2 === 0)
              .map((card, index) => (
                <ScrollCard2
                  key={card.id}
                  title={card.name}
                  content={card.description}
                  src={card.image}
                  bottoms={
                    isMobile || index !== scrollCards.length / 2 - 1
                      ? "border-b"
                      : ""
                  }
                />
              ))}
          </div>
          <div className="w-full md:w-1/2 mt-0 md:mt-[8vw]">
            {scrollCards
              .filter((_, index) => index % 2 !== 0)
              .map((card, index) => (
                <ScrollCard2
                  key={card.id}
                  title={card.name}
                  content={card.description}
                  src={card.image}
                  bottoms={
                    isMobile || index !== scrollCards.length / 2 - 1
                      ? "border-b"
                      : ""
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIndustries;
