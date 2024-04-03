"use client";

import React, { useRef, useEffect, useState } from "react";

const Slider = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    observer.observe(container);

    // Clean up the observer when component unmounts
    return () => {
      observer.unobserve(container);
    };
  }, []);

  const handleGlobalScroll = (event) => {
    if (!isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    // Determine the direction of scroll
    const direction = event.deltaY > 0 ? 1 : -1;

    // Scroll the container
    container.scrollLeft += direction * 100; // Adjust scroll speed as needed

    // Prevent the default behavior of scrolling the entire page
    event.preventDefault();
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("wheel", handleGlobalScroll);
      console.log('screen is visible');
    } else {
      window.removeEventListener("wheel", handleGlobalScroll);
      console.log('screen is not visible');
    }
    // Clean up the event listener when component unmounts or isVisible changes
    return () => {
      window.removeEventListener("wheel", handleGlobalScroll);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        display: "flex",
        width: "100%",
        scrollBehavior: "inherit",
        position: "sticky",
        top: "15%",
      }}
    >
      <div className="h-screen w-full bg-blue-500">Media To be Added</div>
    </div>
  );
};

export default Slider;