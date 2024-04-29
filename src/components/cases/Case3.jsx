"use client";

import React, { useState, useEffect } from "react";
import CaseCard from "@/components/constants/cases/CaseCard";
import Loader from "@/components/constants/loader/Loader";

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
        const data = await response.json();

        const casesWithDetails = await Promise.all(
          data.map(async (caseItem) => {
            const technologies = await Promise.all(
              caseItem.technologies.map(async (techId) => {
                const techResponse = await fetch(
                  `${apiUrl}/api/technologies/${techId}`
                );
                return await techResponse.json();
              })
            );

            let industry = null;
            if (caseItem.industries) {
              const industryResponse = await fetch(
                `${apiUrl}/api/industries/${caseItem.industries}`
              );
              industry = await industryResponse.json();
            }

            return {
              ...caseItem,
              technologies,
              industry,
            };
          })
        );

        
        const newBackgroundColors = {};
        casesWithDetails.forEach((caseItem) => {
          newBackgroundColors[caseItem.id] = generateRandomLightBackground();
        });

        setBackgroundColors(newBackgroundColors);
        setCaseData(casesWithDetails);
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
    return <Loader />;
  }

  if (caseData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {caseData.map((caseItem) => (
        <CaseCard
          key={caseItem.id}
          title={caseItem.title}
          industry={caseItem.industry ? caseItem.industry.name : "N/A"}
          countrySource={caseItem.country_image}
          detail={caseItem.description}
          type={`${caseItem.service_type} App`}
          technologies={caseItem.technologies}
          featuredImage={caseItem.featured_image}
          featuredBackground={backgroundColors[caseItem.id]}
        />
      ))}
    </div>
  );
};

export default Case3;
