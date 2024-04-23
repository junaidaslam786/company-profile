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
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/updates/`);
        const data = await response.json();
        setUpdates(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setFetchingData(false);
        setLoading(false);
      }
    };

    fetchBlogPosts();
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
      <div className="flex justify-center items-center w-full h-full">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-16">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col w-[90%]">
          <div className="flex flex-row items-center text-orangeColor-0 text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">UPDATES</p>
          </div>
          <div className="flex flex-row justify-between items-center mt-16">
            <p className="text-blue-950 text-[3.5vw] font-bold tracking-wide">
              What's new?
            </p>
            <p className="w-1/3 text-blue-950 text-[1.3vw]">
              See fresh updates in our custom software development solutions and
              expert materials.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
        {updates.map((update) =>
          update.type === "Expert Material" ? (
            <ExpertCard
              type={update.category}
              src={update.image}
              heading={update.title}
              detail={update.content}
            />
          ) : (
            <ServiceCard
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
