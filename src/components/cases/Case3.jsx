"use client";

import React, { useState, useEffect } from "react";
import CaseCard from "@/components/constants/cases/CaseCard";
import Loader from "@/components/constants/loader/Loader";
import { getCode } from "country-list";

const Case3 = () => {
  const [caseData, setCaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backgroundColors, setBackgroundColors] = useState({});

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchCaseData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/cases/`);
        let data = await response.json();
        
        data = data.map((item) => {
          const countryCode = getCode(item.country);
          if (countryCode) {
            const flagUrl = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
            return { ...item, countryImage: flagUrl };
          }
          return item;
        });
        setCaseData(data);
        const updatedBackgroundColors = {};
        data.forEach((caseItem) => {
          updatedBackgroundColors[caseItem.id] =
            generateRandomLightBackground();
        });
        setBackgroundColors(updatedBackgroundColors);
      } catch (error) {
        console.error("Error fetching case data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseData();
  }, []);

  const generateRandomLightBackground = () => {
    const lightColors = [
      "bg-red-400",
      "bg-orange-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-teal-400",
      "bg-blue-400",
      "bg-indigo-400",
      "bg-purple-400",
      "bg-pink-400",
      "bg-sky-400",
    ];
    return lightColors[Math.floor(Math.random() * lightColors.length)];
  };

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (caseData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="w-full">
      {caseData.map((caseItem) => (
        <CaseCard
          key={caseItem.id}
          title={caseItem.title}
          industry={caseItem.industries.name}
          countrySource={caseItem.countryImage}
          detail={caseItem.description}
          serviceTypes={caseItem.service_type}
          technologies={caseItem.technologies}
          featuredImage={caseItem.featured_image}
          featuredBackground={backgroundColors[caseItem.id]}
        />
      ))}
    </div>
  );
};

export default Case3;
