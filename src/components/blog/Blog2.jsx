"use client";

import React, { useState, useEffect } from "react";
import BlogsLayout from "@/components/constants/blog/blogsLayout";
import BasicCard from "@/components/constants/blog/BasicCard";
import Loader from "@/components/constants/loader/Loader";

const Blog2 = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const fetchCategoriesAndPosts = async () => {
      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/blogposts/"),
          fetch("http://127.0.0.1:8000/api/categories/"),
        ]);

        const [postsData, categoriesData] = await Promise.all([
          postsResponse.json(),
          categoriesResponse.json(),
        ]);

        setBlogPosts(postsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingCategories(false);
        setLoadingPosts(false);
      }
    };

    fetchCategoriesAndPosts();
  }, []);

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
        <p>No categories available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {categories.map((category) => {
        const categoryPosts = blogPosts.filter(
          (post) => post.category.id === category.id
        );

        return (
          <div key={category.id}>
            <BlogsLayout
              title={`${category.name} Articles`}
              id={category.id}
              button={`Browse all ${category.name} Articles`}
            >
              {loadingPosts ? (
                <div className="w-full h-screen flex justify-center items-center">
                  <Loader />
                </div>
              ) : categoryPosts.length === 0 ? (
                <p>No posts available</p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3vw]">
                  {categoryPosts.map((post) => (
                    <BasicCard
                      href={`/blog/${post.title}`}
                      key={post.id}
                      src={post.image}
                      time={"15 minutes read"}
                      dateTime={new Date(post.published_date).toLocaleString()}
                      title={post.title}
                      content={post.content}
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

export default Blog2;
