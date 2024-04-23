"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/constants/loader/Loader";
import Highlights from "@/components/constants/blogDetails/Highlights";
import BlogDetailsLayout from "@/components/constants/blogDetails/BlogDetailsLayout";
import BlogForm from "../constants/blogDetails/BlogForm";

const BlogDetail = ({ id }) => {
  const [blogPost, setBlogPost] = useState({});
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);
  const [parsedContent, setParsedContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ensure loading is true when fetching new data
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/blogposts/${id}`);
        const data = await response.json();
        setBlogPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (blogPost.user) {
      const fetchAuthor = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/authors/${blogPost.user}`);
          const data = await response.json();
          setAuthor(data);
        } catch (error) {
          console.error("Error fetching Authors:", error);
        }
      };
      
      fetchAuthor();
    }
  }, [blogPost.user]);

  useEffect(() => {
    if (blogPost.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blogPost.content, "text/html");
  
      const sections = Array.from(doc.querySelectorAll("h2")).map(h2 => {
        const id = h2.id;
        const title = h2.textContent.trim();
        let details = [];
        let subheadings = [];  // Initialize subheadings for each section
        let currentNode = h2.nextElementSibling;
  
        while (currentNode && currentNode.tagName !== "H2") {
          if (currentNode.tagName === "P") {
            details.push({ id: currentNode.id, text: currentNode.textContent.trim() });
          }
  
          if (currentNode.tagName === "H3") {
            const subId = currentNode.id;
            const subTitle = currentNode.textContent.trim();
            let subDetails = [];
            currentNode = currentNode.nextElementSibling;
  
            while (currentNode && currentNode.tagName !== "H3" && currentNode.tagName !== "H2") {
              if (currentNode.tagName === "P") {
                subDetails.push({ id: currentNode.id, text: currentNode.textContent.trim() });
              }
              currentNode = currentNode.nextElementSibling;
            }
  
            subheadings.push({ id: subId, text: subTitle, details: subDetails });
            continue;  // Continue to check if there's another H3 or content until H2
          }
  
          // Move to the next element if it's not under current H3
          if (currentNode) currentNode = currentNode.nextElementSibling;
        }
  
        return { id, title, details, subheadings };
      });
  
      setParsedContent(sections);
    }
  }, [blogPost.content]);

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
        date={new Date(blogPost.published_date).toLocaleString()}
        timeToRead={"6 minutes read"}
        featuredImage={blogPost.image}
      />
      <div className="mt-[5vw]">
        <BlogDetailsLayout content={parsedContent} />
      </div>
      <div className="mt-[5vw]">
        <BlogForm />
      </div>
    </div>
  );
};

export default BlogDetail;
