"use client";

import { useRef, useState, useEffect } from "react";

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
        <div className="w-2/3">
          <p className="text-[1.2vw] uppercase text-blueColor-0 font-semibold border-b py-[1vw]">
            Table of Content
          </p>
          <ul className="mt-[2vw]">
            {content.headings.map((heading) => (
              <li
                key={heading.id}
                className={`text-[1vw] font-medium ${
                  activeId === heading.id ? "text-blue-500" : "text-gray-400"
                }`}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[70%] flex flex-col items-center">
        <div className="w-2/3">
          {content.details.map((detail) => (
            <div
              key={detail.id}
              id={detail.id}
              ref={(el) => (headingRefs.current[detail.id] = el)}
              className="my-[2vw]"
            >
              <p className="text-[3vw] uppercase font-extrabold text-blueColor-0">
                {detail.title}
              </p>
              <p className="text-[1vw] font-medium text-blueColor-0">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsLayout;
