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
  const [parsedContent, setParsedContent] = useState([]);
  const [readingTime, setReadingTime] = useState("");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      setLoading(true); // Ensure loading is true when fetching new data
      try {
        const response = await fetch(`${apiUrl}/api/blogposts/${id}`);
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
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    if (blogPost.user) {
      const fetchAuthor = async () => {
        try {
          const response = await fetch(
            `${apiUrl}/api/authors/${blogPost.user}`
          );
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
      const sections = Array.from(doc.querySelectorAll("h2")).map((h2) => {
        const id = h2.id;
        const title = h2.textContent.trim();
        let details = [];
        let subheadings = [];
        let currentNode = h2.nextElementSibling;

        while (currentNode && currentNode.tagName !== "H2") {
          if (currentNode.tagName === "P") {
            details.push({
              id: currentNode.id,
              text: currentNode.textContent.trim(),
            });
          }

          if (currentNode.tagName === "H3") {
            const subId = currentNode.id;
            const subTitle = currentNode.textContent.trim();
            let subDetails = [];
            currentNode = currentNode.nextElementSibling;

            while (
              currentNode &&
              currentNode.tagName !== "H3" &&
              currentNode.tagName !== "H2"
            ) {
              if (currentNode.tagName === "P") {
                subDetails.push({
                  id: currentNode.id,
                  text: currentNode.textContent.trim(),
                });
              }
              currentNode = currentNode.nextElementSibling;
            }

            subheadings.push({
              id: subId,
              text: subTitle,
              details: subDetails,
            });
            continue;
          }

          if (currentNode) currentNode = currentNode.nextElementSibling;
        }

        return { id, title, details, subheadings };
      });

      setParsedContent(sections);

      // Calculate reading time
      const totalWords = sections.reduce((total, section) => {
        let sectionWords = section.details.reduce((secTotal, detail) => {
          return secTotal + detail.text.split(" ").length;
        }, 0);

        section.subheadings.forEach((subheading) => {
          subheading.details.forEach((detail) => {
            sectionWords += detail.text.split(" ").length;
          });
        });

        return total + sectionWords;
      }, 0);

      const calculatedReadingTime = Math.ceil(totalWords / 225);
      setReadingTime(`${calculatedReadingTime} minutes read`);
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
        timeToRead={readingTime}
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
