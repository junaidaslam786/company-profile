"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/constants/loader/Loader";
import Highlights from "@/components/constants/blogDetails/Highlights";
import BlogDetailsLayout from "@/components/constants/blogDetails/BlogDetailsLayout";
import Image from "next/image";
import BlogForm from "../constants/blogDetails/BlogForm";

const BlogDetail = ({ id }) => {
  const blogContent = {
    headings: [
      { id: "intro", text: "Introduction" },
      { id: "middle", text: "Middle Section" },
      { id: "conclusion", text: "Conclusion" },
    ],
    details: [
      {
        id: "intro",
        title: "Introduction",
        text: "The hidden benefit in the partnership means doing more than was agreed upon and contributing to the well-being of both your and your partner's company. It lies in the approach to our work.For the last 9 years, we at Axon have learned to understand clients' business needs better and foresee them. We are confident that in today's fast-paced world, a 'lone fighter' approach is not the best possible strategy for growth. Companies should invent new ways to jointly drive innovations that meet the needs of their customers today and in the future. One of the essential keys to success in partnership is communication. Clear communication and openness to discussion are as much critical as technical expertise. It's essential for software engineers to not only know how to write the code but to have enough skills to communicate with clients efficiently. From our background in software engineering and communication with dozens of clients, the constant exchange of ideas helps to reduce the risk of assumptions and to focus on the common vision. Open and effective communication channels ensure that the expectations of the parties do not diverge.",
      },
      {
        id: "middle",
        title: "Middle Section",
        text: "The hidden benefit in the partnership means doing more than was agreed upon and contributing to the well-being of both your and your partner's company. It lies in the approach to our work.For the last 9 years, we at Axon have learned to understand clients' business needs better and foresee them. We are confident that in today's fast-paced world, a 'lone fighter' approach is not the best possible strategy for growth. Companies should invent new ways to jointly drive innovations that meet the needs of their customers today and in the future. One of the essential keys to success in partnership is communication. Clear communication and openness to discussion are as much critical as technical expertise. It's essential for software engineers to not only know how to write the code but to have enough skills to communicate with clients efficiently. From our background in software engineering and communication with dozens of clients, the constant exchange of ideas helps to reduce the risk of assumptions and to focus on the common vision. Open and effective communication channels ensure that the expectations of the parties do not diverge.",
      },
      {
        id: "conclusion",
        title: "Conclusion",
        text: "The hidden benefit in the partnership means doing more than was agreed upon and contributing to the well-being of both your and your partner's company. It lies in the approach to our work.For the last 9 years, we at Axon have learned to understand clients' business needs better and foresee them. We are confident that in today's fast-paced world, a 'lone fighter' approach is not the best possible strategy for growth. Companies should invent new ways to jointly drive innovations that meet the needs of their customers today and in the future. One of the essential keys to success in partnership is communication. Clear communication and openness to discussion are as much critical as technical expertise. It's essential for software engineers to not only know how to write the code but to have enough skills to communicate with clients efficiently. From our background in software engineering and communication with dozens of clients, the constant exchange of ideas helps to reduce the risk of assumptions and to focus on the common vision. Open and effective communication channels ensure that the expectations of the parties do not diverge.",
      },
    ],
  };
  const [blogPost, setBlogPost] = useState({});
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/blogposts/${id}`
        );
        const data = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorId = blogPost.user;
        const response = await fetch(
          `http://127.0.0.1:8000/api/authors/${authorId}`
        );
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.error("Error fetching Authors:", error);
      } finally {
        setLoading(false);
      }
    };

    if (blogPost.user) {
      fetchData();
    }
  }, [blogPost]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-full mt-[15vh]">
      <div className="">
        <Highlights
          title={blogPost.title}
          blogType={blogPost.category.name}
          authorImage={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
          author={author.username}
          role={author.roles}
          date={new Date(blogPost.published_date).toLocaleString()}
          timeToRead={"6 minutes read"}
          featuredImage={blogPost.image}
        />
      </div>
      <div className="mt-[5vw]">
        <BlogDetailsLayout content={blogContent} />
      </div>
      <div>
        <BlogForm />
      </div>
    </div>
  );
};

export default BlogDetail;
