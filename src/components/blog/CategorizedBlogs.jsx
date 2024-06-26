"use client";

import React, { useState, useEffect } from "react";
import BasicCard from "@/components/constants/blog/BasicCard";
import Loader from "@/components/constants/loader/Loader";
import BlogsLayout from "@/components/constants/blog/BlogsLayout";

const CategorizedBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchCategoriesAndPosts = async () => {
      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          fetch(`${apiUrl}/api/blogposts/`),
          fetch(`${apiUrl}/api/categories/`),
        ]);

        if (!postsResponse.ok || !categoriesResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const [postsData, categoriesData] = await Promise.all([
          postsResponse.json(),
          categoriesResponse.json(),
        ]);

        const postsWithReadingTime = postsData.map((post) => ({
          ...post,
          readingTime: calculateReadingTime(post.content),
        }));

        setBlogPosts(postsWithReadingTime);
        setCategories(
          categoriesData.filter(
            (category) => !["Featured", "featured", "FEATURED"].includes(category.name)
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingCategories(false);
        setLoadingPosts(false);
      }
    };

    fetchCategoriesAndPosts();
  }, []);

  const calculateReadingTime = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const words = doc.body.textContent?.split(" ").length || 0;
    const minutes = Math.ceil(words / 225);
    return `${minutes} minutes read`;
  };

  if (loadingCategories) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>No category available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {categories.map((category) => {
        const categoryPosts = blogPosts
          .filter((post) => post.category.id === category.id)
          .slice(0, 3);

        return (
          <div key={category.id}>
            <BlogsLayout
              title={`${category.name} Articles`}
              id={category.id}
              button={`Browse all ${category.name} Articles`}
              href={category.id} // Updated to pass category ID
            >
              {loadingPosts ? (
                <div className="w-full h-screen flex justify-center items-center">
                  <Loader />
                </div>
              ) : categoryPosts.length === 0 ? (
                <p>No post available</p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3vw]">
                  {categoryPosts.map((post) => (
                    <BasicCard
                      href={`/blog/${post.id}`}
                      key={post.id}
                      src={post.image}
                      time={post.readingTime}
                      dateTime={new Date(post.published_date).toLocaleString()}
                      title={post.title}
                      content={post.heading}
                    />
                  ))}
                </div>
              )}
            </BlogsLayout>
          </div>
        );
      })}
    </div>
  );
};

export default CategorizedBlogs;
