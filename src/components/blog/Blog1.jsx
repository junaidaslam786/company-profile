"use client";

import React, { useState, useEffect } from "react";
import ScrollSectionLeft from "@/components/constants/blog/ScrollSectionLeft";
import ScrollSectionRight from "@/components/constants/blog/ScrollSectionRight";
import Loader from "@/components/constants/loader/Loader";
import BlogsLayout from "@/components/constants/blog/BlogsLayout";

const Blog1 = () => {
  const [category1Posts, setCategory1Posts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogposts/`);
        const data = await response.json();
        const filteredPosts = data.filter(
          (post) => post.category && post.category.name === "Category 1"
        );
        const postsWithReadingTime = filteredPosts.map((post) => ({
          ...post,
          readingTime: calculateReadingTime(post.content),
        }));
        const maxPosts =
          postsWithReadingTime.length > 6 ? 6 : postsWithReadingTime.length;
        setCategory1Posts(postsWithReadingTime.slice(0, maxPosts));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateReadingTime = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const words = doc.body.textContent.split(" ").length;
    const minutes = Math.ceil(words / 225);
    return `${minutes} minutes read`;
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (category1Posts.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const category = category1Posts[0].category; // Assuming all posts have the same category

  return (
    <div className="w-full mt-[5vw]">
      <BlogsLayout
        title={category.name}
        id={category.id}
        button={`Browse all ${category.name} articles`}
        href={`${category.id}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw] w-full h-full">
          <div className="h-full lg:h-[70vh] lg:sticky lg:top-[15vh]">
            <ScrollSectionLeft
              href={`/blog/${category1Posts[0].id}`}
              src={category1Posts[0].image}
              time={category1Posts[0].readingTime}
              dateTime={new Date(
                category1Posts[0].published_date
              ).toLocaleString()}
              title={category1Posts[0].title}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw]">
            {category1Posts.slice(1).map((post) => (
              <div className="lg:mb-[3vw]" key={post.id}>
                <ScrollSectionRight
                  href={`/blog/${post.id}`}
                  src={post.image}
                  time={post.readingTime}
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
