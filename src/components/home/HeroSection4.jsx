"use client";

import React, { useState, useEffect, useRef } from "react";
import StoryCard from "@/components/constants/home/StoryCard";
import Image from "next/image";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";
import { getCode } from "country-list";

const HeroSection4 = () => {
  const [caseData, setCaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backgroundColors, setBackgroundColors] = useState({});
  const [activeImage, setActiveImage] = useState(0);
  const caseItemRefs = useRef([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchCaseData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/cases/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log('Fetched case data:', data);

        // Filter out null or undefined values
        data = data.filter(item => item && item.id && item.title && item.country);

        data = data.map((item) => {
          const countryCode = getCode(item.country);
          if (countryCode) {
            const flagUrl = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
            return { ...item, countryImage: flagUrl };
          }
          return item;
        });

        // Sort by case id numerically and limit the array to a maximum of 3 items
        data = data.sort((a, b) => a.id - b.id).slice(0, 3);

        setCaseData(data);
        const updatedBackgroundColors = {};
        data.forEach((caseItem, index) => {
          updatedBackgroundColors[caseItem.id] = generateRandomLightBackground();
          caseItemRefs.current[index] = React.createRef();
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveImage(parseInt(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.5 }
    );

    caseData.forEach((_, index) => {
      if (caseItemRefs.current[index]?.current) {
        observer.observe(caseItemRefs.current[index].current);
      }
    });

    return () => {
      caseData.forEach((_, index) => {
        if (caseItemRefs.current[index]?.current) {
          observer.unobserve(caseItemRefs.current[index].current);
        }
      });
    };
  }, [caseData]);

  const generateRandomLightBackground = () => {
    const lightColors = ["bg-indigo-400", "bg-pink-400", "bg-sky-400"];
    return lightColors[Math.floor(Math.random() * lightColors.length)];
  };

  const defaultImage = '/path/to/default/image.jpg';

  if (loading) {
    return <Loader />;
  }

  if (caseData.length === 0) {
    return <div>No story available</div>;
  }

  return (
    <div className="flex flex-row w-full mt-[8vw]">
      <div className="w-1/2 flex flex-col items-center">
        <div className="w-5/6">
          <div className="w-2/3 mt-[8vw]">
            <div className="flex flex-row items-center text-orangeColor-0 font-semibold text-[1vw]">
              <IoRemoveOutline />
              <p className="uppercase">SUCCESS STORIES</p>
            </div>
            <p className="text-white font-semibold leading-tight text-[4vw] mt-[6vw]">
              Custom business software development
            </p>
          </div>
        </div>
        <div className="w-3/5 mt-[8vw]">
          {caseData.map((caseItem, index) => (
            <div
              key={caseItem.id}
              ref={caseItemRefs.current[index]}
              data-index={index}
              className="mb-[8vw]"
            >
              <StoryCard
                id={caseItem.id}
                business={caseItem.industries?.name}
                country={caseItem.country}
                countryFlag={caseItem.countryImage}
                serviceTypes={caseItem.service_type}
                title={caseItem.title}
                detail={caseItem.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`w-1/2 ${backgroundColors[caseData[activeImage]?.id]}`}>
        <div
          style={{
            width: "100%",
            position: "sticky",
            top: "12vh",
            height: "88vh",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {caseData[activeImage]?.featured_image ? (
              <Image
                src={caseData[activeImage].featured_image}
                alt="Active Image"
                width={500}
                height={500}
              />
            ) : (
              <Image
                src={defaultImage}
                alt="Default Image"
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
