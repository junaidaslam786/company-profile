"use client";

import React, { useState, useEffect } from "react";
import ScrollCard from "@/components/constants/home/ScrollCard";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HomeServices = () => {
  const [scrollCards, setScrollCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/services/`);
        const data = await response.json();
        const evenCount = Math.min(data.length, 8);
        setScrollCards(data.slice(0, evenCount % 2 === 0 ? evenCount : evenCount - 1));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setFetchingData(false);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || fetchingData) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (scrollCards.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p>No service available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full relative">
      <div className="flex flex-col items-center w-full md:w-1/3 md:pl-[1.5vw] md:sticky md:top-[8vh] md:h-[80vh]">
        <div className="w-5/6">
          <div className="flex flex-row items-center text-orangeColor-0 text-[2.5vw] md:text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">WE PROVIDE</p>
          </div>
          <h5 className="text-[7vw] md:text-[3.5vw] w-full font-bold leading-tight text-blueColor-0 mt-[1.8vw]">
            Custom software development services
          </h5>
          <p className="text-[3vw] md:text-[1.3vw] mt-[1.5vw] text-blueColor-0">
            Full-cycle custom software services to develop unique software
            solutions.
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3 mt-[15vw] md:mt-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {scrollCards?.map((card, index) => {
              if (index % 2 === 0) {
                return (
                  <ScrollCard
                    key={card?.id}
                    title={card?.name}
                    content={card?.description}
                    bottoms={
                      isMobile || index !== scrollCards.length - 2 ? "border-b" : ""
                    }
                  />
                );
              }
            })}
          </div>
          <div className="w-full md:w-1/2 mt-0 md:mt-[6vw]">
            {scrollCards.map((card, index) => {
              if (index % 2 !== 0) {
                return (
                  <ScrollCard
                    key={card.id}
                    title={card.name}
                    content={card.description}
                    bottoms={
                      isMobile || index !== scrollCards.length - 1 ? "border-b" : ""
                    }
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

export default HomeServices;
