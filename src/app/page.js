"use client";

import { useState, useEffect } from "react";

import HeroSection from "@/components/home/HeroSection1";
import Herosection2 from "@/components/home/HeroSection2";
import HeroSection3 from "@/components/home/HeroSection3";
import HeroSection4 from "@/components/home/HeroSection4";
import HeroSection5 from "@/components/home/HeroSection5";
import HeroSection6 from "@/components/home/HeroSection6";
import HeroSection7 from "@/components/home/HeroSection7";
import HeroSection8 from "@/components/home/HeroSection8";
import HeroSection9 from "@/components/home/HeroSection9";
import HeroSection10 from "@/components/home/HeroSection10";
import HeroSection11 from "@/components/home/HeroSection11";
import HeroSection12 from "@/components/home/HeroSection12";

const Home = () => {
  const [bgColor, setBgColor] = useState("#ffffff"); // use HEX colors for inline styling

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = scrollPosition / totalHeight;

    if (scrollPercentage <= 0.20 || scrollPercentage >= 0.72) {
      setBgColor("#ffffff"); // White color
    } else {
      setBgColor("#141b4d"); // Blue color, equivalent to Tailwind's blue-500
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    transition: "background-color 1s ease", // Smooth transition for background color
    backgroundColor: bgColor, // Dynamic background color
  };

  return (
    <main
      style={style}
      className="flex font-sans min-h-screen flex-col items-center justify-between"
    >
      <HeroSection />
      <Herosection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HeroSection6 />
      <HeroSection7 />
      <HeroSection8 />
      <HeroSection9 />
      <HeroSection10 />
      <HeroSection11 />
      <HeroSection12 />
    </main>
  );
};

export default Home;
