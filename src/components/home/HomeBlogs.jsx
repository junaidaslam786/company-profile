"use client";

import React, { useState, useEffect } from "react";
import ReviewCard from "@/components/constants/home/ReviewCard";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HomeBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogposts/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const postsWithReadingTime = data.slice(0, 3).map((post) => ({
          ...post,
          readingTime: calculateReadingTime(post.content),
        }));
        setBlogPosts(postsWithReadingTime);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
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

  if (loading) {
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
        <div className="w-[90%] flex flex-row items-center text-orangeColor-0 text-[2.5vw] md:text-[1vw] font-semibold">
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
            href={`blog/${post.id}`}
            category={post.category.name}
            src={post.image}
            title={post.title}
            content={post.description}
            date={new Date(post.published_date).toLocaleDateString()}
            time={post.readingTime}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
