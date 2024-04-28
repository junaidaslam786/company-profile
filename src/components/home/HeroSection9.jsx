"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HeroSection9 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/teammembers/`);
        const data = await response.json();
        setTeams(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Team data:", error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    // Dynamically calculate the container width and apply transform based on the current index
    if (containerRef.current) {
      const updateWidthAndTransform = () => {
        const totalWidth = containerRef.current.clientWidth * teams.length;
        containerRef.current.style.width = `${totalWidth}px`;
        containerRef.current.style.transform = `translateX(-${
          containerRef.current.clientWidth * currentImageIndex / 3
        }px)`;
      };
      updateWidthAndTransform();
      window.addEventListener("resize", updateWidthAndTransform);
      return () =>
        window.removeEventListener("resize", updateWidthAndTransform);
    }
  }, [teams, currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? teams.length - 1 : prevIndex - 1
    );
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
        <div className="w-[90%] flex flex-row items-center text-orangeColor-0 text-[1vw] font-semibold">
          <IoRemoveOutline />
          <p className="tracking-widest uppercase">team</p>
        </div>
        <div className="w-[90%]">
          <p className="text-blueColor-0 text-[3.5vw] font-bold tracking-wide mt-10">
            Great people behind every project
          </p>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center mt-12">
        <div className="w-[90%] overflow-hidden flex flex-row">
          <div
            className="transition-transform duration-300 ease-in-out flex"
            ref={containerRef}
          >
            {teams.map((team) => (
              <div
                key={team.id}
                className="mr-9 flex-shrink-0" // Ensure that divs do not shrink and are properly aligned
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
          className="p-2 rounded-full text-white text-[1.5vw] font-bold bg-orangeColor-0 mr-5 opacity-80 hover:opacity-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full text-white text-[1.5vw] font-bold bg-orangeColor-0 opacity-80 hover:opacity-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection9;
