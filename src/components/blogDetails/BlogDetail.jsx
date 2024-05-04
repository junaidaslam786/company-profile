"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/constants/loader/Loader";
import Highlights from "@/components/constants/blogDetails/Highlights";
import BlogDetailsLayout from "@/components/constants/blogDetails/BlogDetailsLayout";
import BlogForm from "@/components/constants/blogDetails/BlogForm";

const BlogDetail = ({ id }) => {
  const [blogPost, setBlogPost] = useState({});
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);
  const [readingTime, setReadingTime] = useState("");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/blogposts/${id}`);
        const data = await response.json();
        setBlogPost(data);
        setReadingTime(calculateReadingTime(data.content));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    if (blogPost.author) {
      const fetchAuthor = async () => {
        try {
          const response = await fetch(
            `${apiUrl}/api/authors/${blogPost.author}`
          );
          const data = await response.json();
          setAuthor(data);
        } catch (error) {
          console.error("Error fetching Authors:", error);
        }
      };

      fetchAuthor();
    }
  }, [blogPost.author]);

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

  return (
    <div className="w-full mt-[15vh]">
      <Highlights
        title={blogPost.title}
        blogType={blogPost.category.name}
        authorImage={author.Author_image}
        author={author.username}
        role={author.roles}
        timeToRead={readingTime} // Use the calculated reading time here
        date={new Date(blogPost.published_date).toLocaleString()}
        featuredImage={blogPost.image}
      />
      <div className="mt-[5vw]">
        <BlogDetailsLayout content={blogPost.content} />
      </div>
      <div className="mt-[5vw]">
        <BlogForm />
      </div>
    </div>
  );
};

export default BlogDetail;
