"use client";

import React, { useState, useEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";
import ExpertCard from "@/components/constants/home/ExpertCard";
import ServiceCard from "@/components/constants/home/ServiceCard";

const HeroSection3 = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchUpdates = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/updates/`);
        const data = await response.json();
        setUpdates(data);
      } catch (error) {
        console.error("Error fetching Updates:", error);
      } finally {
        setFetchingData(false);
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  if (loading || fetchingData) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (updates.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p>No update available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-[4vw]">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col w-[90%]">
          <div className="flex flex-row items-center text-orangeColor-0 text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">UPDATES</p>
          </div>
          <div className="flex flex-row justify-between items-center mt-[4vw]">
            <p className="text-blue-950 text-[3.5vw] font-bold tracking-wide">
              What&apos;s new?
            </p>
            <p className="w-1/3 text-blue-950 text-[1.3vw]">
              See fresh updates in our custom software development solutions and
              expert materials.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] m-[2vw]">
        {updates.map((update) =>
          update.category === "expert" ? (
            <ExpertCard
              key={update.id}
              type={update.category}
              src={update.image}
              heading={update.title}
              detail={update.content}
            />
          ) : (
            <ServiceCard
              key={update.id}
              type={update.category}
              src={update.image}
              detail={update.content}
            />
          )
        )}
      </div>
    </div>
  );
};

export default HeroSection3;
