"use client";

import React, { useState, useEffect } from "react";
import ReviewCard from "@/components/constants/home/ReviewCard";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HeroSection10 = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(true);
  const [readingTime, setReadingTime] = useState("");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogposts/`);
        const data = await response.json();
        setBlogPosts(data.slice(0, 3));
        setReadingTime(calculateReadingTime(data.content));
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setFetchingData(false);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 225;
    const words = text ? text.match(/\w+/g).length : 0;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} minute read`;
  };

  if (loading || fetchingData) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>No blog available</p>
      </div>
    );
  }

  return (
    <div className="w-full mt-32">
      <div className="flex flex-col w-full items-center">
        <div className="w-[90%] flex flex-row items-center text-orangeColor-0 text-[1.5vw] md:text-[1vw] font-semibold">
          <IoRemoveOutline />
          <p className="tracking-widest uppercase">blog</p>
        </div>
        <div className="w-[90%]">
          <p className="text-blueColor-0 text-[4.5vw] md:text-[3.5vw] font-bold tracking-wide mt-10">
            Tech insights collected for you
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        {blogPosts.map((post) => (
          <ReviewCard
            key={post.id}
            src={post.image}
            title={post.title}
            content={post.description}
            date={new Date(post.published_date).toLocaleDateString()}
            time={readingTime}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection10;
