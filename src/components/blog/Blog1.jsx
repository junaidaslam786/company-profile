"use client";

import React, { useState, useEffect } from "react";
import ScrollSectionLeft from "@/components/constants/blog/ScrollSectionLeft";
import ScrollSectionRight from "@/components/constants/blog/ScrollSectionRight";
import Loader from "@/components/constants/loader/Loader";
import BlogsLayout from "@/components/constants/blog/BlogsLayout";

const Blog1 = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogposts/`);
        const data = await response.json();
        // Adjust the posts to be even and no more than 6
        const maxPosts = data.length > 6 ? 6 : data.length;
        setBlogPosts(data.slice(0, maxPosts % 2 === 0 ? maxPosts : maxPosts - 1));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full mt-[5vw]">
      <BlogsLayout
        title={"Featured"}
        id={"1"}
        button={"Browse all featured articles"}
        href={'featured'}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw] w-full h-full">
          <div className="h-full lg:h-[70vh] lg:sticky lg:top-[15vh]">
            <ScrollSectionLeft
              href={`/blog`}
              src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
              time={"15 minutes read"}
              dateTime={"Apr 24, 2024"}
              title={"How to protect intellectual property of your clients"}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw]">
            {blogPosts.map((post) => (
              <div className="lg:mb-[3vw]" key={post.id}>
                <ScrollSectionRight
                  href={`/blog/${post.id}`}
                  src={post.image}
                  time={"15 minutes read"}
                  dateTime={new Date(post.published_date).toLocaleString()}
                  title={post.title}
                />
              </div>
            ))}
          </div>
        </div>
      </BlogsLayout>
    </div>
  );
};

export default Blog1;
