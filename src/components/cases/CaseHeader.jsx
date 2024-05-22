"use client";

import React, { useState, useEffect } from "react";
import BlueButton from "@/components/constants/cases/BlueButton";
import DarkButton from "@/components/constants/cases/DarkButton";
import RedButton from "@/components/constants/cases/RedButton";
import Loader from "@/components/constants/loader/Loader";

const CaseHeader = () => {
  const [industries, setIndustries] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [industriesLoading, setIndustriesLoading] = useState(true);
  const [technologiesLoading, setTechnologiesLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchIndustoryData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/industries/`);
        const data = await response.json();
        setIndustries(data);
        setIndustriesLoading(false);
      } catch (error) {
        console.error("Error fetching Industory data:", error);
        setIndustriesLoading(false);
      }
    };

    fetchIndustoryData();
  }, []);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchTechnologyData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/technologies/`);
        const data = await response.json();
        setTechnologies(data);
        setTechnologiesLoading(false);
      } catch (error) {
        console.error("Error fetching Technology data:", error);
        setTechnologiesLoading(false);
      }
    };

    fetchTechnologyData();
  }, []);

  return (
    <div className="border-t w-full py-[6vw] md:py-[3vw] grid grid-cols-1 gap-x-[2.22vw] md:grid-cols-[0.3fr,1fr,0.9fr] grid-rows-auto md:gap-x-[1.11vw]">
      <div className="col-span-1 row-span-1 py-[5vw] md:py-0">
        <p className="text-[2.5vw] md:text-[1vw] text-gray-500 mb-[2vw] md:mb-[1vw]">Select by type:</p>
        <div className="flex flex-wrap gap-[1.38vw] md:gap-[0.69vw] justify-start">
          <DarkButton button={"Both"} />
          <DarkButton button={"Web App"} />
          <DarkButton button={"Mobile App"} />
        </div>
      </div>
      <div className="col-span-1 row-span-1 py-[5vw] md:py-0">
        <p className="text-[2.5vw] md:text-[1vw] text-gray-500 mb-[2vw] md:mb-[1vw]">Select by industry:</p>
        {industriesLoading ? (
          <div className="w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : industries.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <div className="flex flex-wrap gap-[1.38vw] md:gap-[0.69vw] justify-between">
            {industries.map((industry) => (
              <BlueButton key={industry.id} button={industry.name} />
            ))}
          </div>
        )}
      </div>
      <div className="col-span-1 row-span-1 py-[5vw] md:py-0">
        <p className="text-[2.5vw] md:text-[1vw] text-gray-500 mb-[2vw] md:mb-[1vw]">
          Select by technology:
        </p>
        {technologiesLoading ? (
          <div className="w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : technologies.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <div className="flex flex-wrap gap-[1.38vw] md:gap-[0.69vw] justify-between">
            {technologies.map((technology) => (
              <RedButton key={technology.id} button={technology.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseHeader;
