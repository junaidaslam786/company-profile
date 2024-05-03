"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

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

    return () => {
      observer.unobserve(container);
    };
  }, []);

  const handleGlobalScroll = useCallback((event) => {
    if (!isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    container.scrollLeft += direction * 100;
    event.preventDefault();
  }, [isVisible]); // Depend on isVisible because the function behavior depends on it

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("wheel", handleGlobalScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleGlobalScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleGlobalScroll);
    };
  }, [isVisible, handleGlobalScroll]); // Now handleGlobalScroll is stable and can be a dependency

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        display: "flex",
        width: "100%",
        scrollBehavior: "inherit",
        position: "sticky",
        top: "12vh",
      }}
    >
      <div className="h-screen w-full bg-blue-500">Media to be Added</div>
    </div>
  );
};

export default Slider;
