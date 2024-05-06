"use client";

import React, { useState, useRef, useEffect } from "react";
import RecommendationCard from "@/components/constants/home/RecommendationCard";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HeroSection8 = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardRef = useRef(null);
  const cardWidth = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/testimonials/`);
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (containerRef.current && cardRef.current) {
      cardWidth.current = cardRef.current.offsetWidth;
      containerRef.current.style.width = `${
        cardWidth.current * testimonials.length
      }px`;
    }
  }, [testimonials]);

  const handleNext = () => {
    const nextIndex = (currentCardIndex + 1) % testimonials.length;
    setCurrentCardIndex(nextIndex);
    containerRef.current.style.transform = `translateX(-${
      cardWidth.current * nextIndex * 1.077
    }px)`;
  };

  const handlePrevious = () => {
    const prevIndex =
      currentCardIndex === 0 ? testimonials.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(prevIndex);
    containerRef.current.style.transform = `translateX(-${
      cardWidth.current * prevIndex
    }px)`;
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => <FaStar key={i} />);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p>No testimonials available</p>
      </div>
    );
  }

  return (
    <div className="w-full py-24 relative">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col items-center w-[90%]">
          <div className="w-full flex flex-row items-center text-orangeColor-0 text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">Trusted by clients</p>
          </div>
          <div className="w-5/6">
            <p className="text-blueColor-0 text-[3.5vw] font-bold tracking-wide mt-10">
              Our clients recommend us
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-12">
        <div className="w-4/5 overflow-hidden flex flex-row">
          <div
            className="transition-transform duration-300 ease-in-out flex"
            ref={containerRef}
          >
            {testimonials.map((testimonial) => (
              <div className="mr-[3vw]" key={testimonial.id} ref={cardRef}>
                <RecommendationCard
                  rating={renderStars(testimonial.rating)}
                  content={testimonial.content}
                  company={testimonial.client_company}
                  date={testimonial.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-[10%] bottom-0 transform -translate-y-1/2 flex items-center">
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

export default HeroSection8;
