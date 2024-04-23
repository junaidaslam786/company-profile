"use client";

import React, { useRef, useState, useEffect } from "react";

function BlogDetailsLayout({ content }) {
  const [activeId, setActiveId] = useState("");
  const headingRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let nearestHeading = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !nearestHeading ||
              entry.intersectionRatio > nearestHeading.intersectionRatio
            ) {
              nearestHeading = {
                id: entry.target.id,
                intersectionRatio: entry.intersectionRatio,
              };
            }
          }
        });
        if (nearestHeading) {
          setActiveId(nearestHeading.id);
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: Array.from({ length: 20 }, (_, index) => index * 0.05),
      }
    );

    Object.values(headingRefs.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      Object.values(headingRefs.current).forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [content]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middlePosition =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;
      window.scrollTo({
        top: middlePosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-row justify-between">
      <div className="w-[30%] sticky top-[20vh] h-[70vh] border-r flex flex-col items-center">
        {/* Table of Contents */}
        <div className="w-2/3">
          <p className="text-[1.2vw] uppercase text-blueColor-0 font-semibold border-b py-[1vw]">Table of Content</p>
          <ul className="mt-[2vw]">
            {content.map((section) => (
              <React.Fragment key={section.id}>
                <li className={`text-[1vw] my-[1vw] font-medium ${activeId === section.id ? "text-blue-500" : "text-gray-400"}`}>
                  <a href={`#${section.id}`} onClick={(e) => handleClick(e, section.id)}>{section.title}</a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[70%] flex flex-col items-center">
        {/* Details rendering */}
        <div className="w-2/3">
          {content.map((section) => (
            <div key={section.id} id={section.id} ref={(el) => (headingRefs.current[section.id] = el)} className="my-[2vw]">
              <p className="text-[3vw] uppercase font-extrabold text-blueColor-0">{section.title}</p>
              {section.details.map(detail => (
                <p key={detail.id} className="text-[1vw] font-medium text-blueColor-0">{detail.text}</p>
              ))}
              {section.subheadings.map(sub => (
                <div key={sub.id} id={sub.id} ref={(el) => (headingRefs.current[sub.id] = el)} className="mt-2">
                  <p className="text-[2vw] text-blueColor-0 font-bold">{sub.text}</p>
                  {sub.details.map(detail => (
                    <p key={detail.id} className="text-[1vw]">{detail.text}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsLayout;
