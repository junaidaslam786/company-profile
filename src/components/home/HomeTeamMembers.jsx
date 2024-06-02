"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/legacy/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HomeTeamMembers = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/teammembers/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching Team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    const updateWidthAndTransform = () => {
      if (containerRef.current) {
        const cardWidth = containerRef.current.clientWidth / 3;
        const totalWidth = cardWidth * teams.length;
        containerRef.current.style.width = `${totalWidth}px`;
        containerRef.current.style.transform = `translateX(-${cardWidth * currentImageIndex}px)`;
      }
    };

    updateWidthAndTransform();
    window.addEventListener("resize", updateWidthAndTransform);

    return () => window.removeEventListener("resize", updateWidthAndTransform);
  }, [teams, currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? teams.length - 1 : prevIndex - 1));
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (teams.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>No team members available</p>
      </div>
    );
  }

  return (
    <div className="w-full py-24 relative">
      <div className="flex flex-col w-full items-center">
        <div className="w-[90%] flex flex-row items-center text-orangeColor-0 text-[2.5vw] md:text-[1vw] font-semibold">
          <IoRemoveOutline />
          <p className="tracking-widest uppercase">team</p>
        </div>
        <div className="w-[90%]">
          <p className="text-blueColor-0 text-[7vw] md:text-[3.5vw] font-bold tracking-wide mt-10">
            Great people behind every project
          </p>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center mt-12">
        <div className="w-[90%] overflow-hidden flex flex-row">
          <div className="transition-transform duration-300 ease-in-out flex" ref={containerRef}>
            {teams.map((team) => (
              <div
                key={team.id}
                className="mr-9 flex-shrink-0"
                style={{ width: "30.3%", flex: "0 0 auto" }}
              >
                <Image
                  src={team.image}
                  width={500}
                  height={500}
                  layout="responsive"
                  alt={`Image of ${team.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-40 bottom-5 transform -translate-y-1/2 flex items-center">
        <button
          onClick={handlePrevious}
          className="p-[0.5vw] rounded-full text-white text-[3.5vw] md:text-[1.5vw] font-bold bg-orangeColor-0 mr-5 opacity-80 hover:opacity-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-[0.5vw] rounded-full text-white text-[3.5vw] md:text-[1.5vw] font-bold bg-orangeColor-0 opacity-80 hover:opacity-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HomeTeamMembers;
