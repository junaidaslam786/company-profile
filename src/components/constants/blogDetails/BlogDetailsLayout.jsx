"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "@/components/constants/blogDetails/BlogDetailsLayout.module.css";

function BlogDetailsLayout({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (content) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = content;
      const h2s = tempDiv.querySelectorAll("h2");
      const headingsData = Array.from(h2s).map((h2, index) => {
        const id = `section-${index}`;
        h2.id = id;
        return { id, text: h2.innerText };
      });
      setHeadings(headingsData);
      contentRef.current.innerHTML = tempDiv.innerHTML;
    }
  }, [content]);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      window.scrollTo({
        top: absoluteElementTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.reduce(
          (prev, curr) => {
            return prev.intersectionRatio > curr.intersectionRatio
              ? prev
              : curr;
          },
          { intersectionRatio: 0 }
        );

        if (visibleEntry.intersectionRatio > 0) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="relative flex flex-row justify-between">
      <div className="hidden w-[30%] sticky top-[20vh] h-full border-r md:flex flex-col items-center">
        {/* Table of Contents */}
        <div className="w-2/3">
          <p className="text-[1.2vw] uppercase text-blueColor-0 font-semibold border-b py-[1vw]">
            Table of Content
          </p>
          <ul className="mt-[2vw]">
            {headings.map((heading) => (
              <li key={heading.id} className="text-[1vw] my-[1vw] font-medium">
                <a
                  href={`#${heading.id}`}
                  className="toc-item"
                  style={
                    heading.id === activeId
                      ? { color: "rgb(33, 150, 243)" }
                      : { color: "rgb(20 27 77)" }
                  }
                  onClick={(e) => handleTocClick(e, heading.id)}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Content Details */}
      <div className="w-full md:w-[70%] flex flex-col items-center">
        <div className={styles.blogContent} ref={contentRef} />
      </div>
    </div>
  );
}

export default BlogDetailsLayout;
