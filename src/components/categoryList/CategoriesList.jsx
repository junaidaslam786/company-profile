"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import EventCard from "@/components/constants/events/EventCard";
import { FiArrowLeft } from "react-icons/fi";
import { HiMiniChevronDown } from "react-icons/hi2";
import Loader from "@/components/constants/loader/Loader";
import { FaArrowRight } from "react-icons/fa";

const CategoriesList = ({ categoryId }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCategoryVisible, setCategoryVisible] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    if (!categoryId) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const categoryResponse = await fetch(
          `${apiUrl}/api/categories/${categoryId}/`
        );
        const categoryData = await categoryResponse.json();
        setCategory(categoryData);

        const postsResponse = await fetch(`${apiUrl}/api/blogposts/`);
        const postsData = await postsResponse.json();
        setBlogPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories/`);
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Category data:", error);
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, []);

  useEffect(() => {
    console.log("Blog Posts:", blogPosts);
    console.log("Category ID:", categoryId);
    const filtered = blogPosts.filter(
      (post) => Number(post.category.id) === Number(categoryId)
    );
    setFilteredPosts(filtered);
  }, [blogPosts, categoryId]);

  const toggleCategoryVisibility = () => {
    setCategoryVisible(!isCategoryVisible);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>No category or posts available</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col mt-[20vh]">
      <Link
        href={"/blog"}
        className="flex flex-row items-center justify-start text-orangeColor-0 hover:text-skyColor-0 cursor-pointer "
      >
        <FiArrowLeft className="text-[1.5vw] mr-[0.5vw]" />
        <p className="uppercase font-semibold text-[1.1vw]">Back to the blog</p>
      </Link>
      <div className="w-full flex flex-row items-center justify-between">
        <p className="uppercase text-blueColor-0 text-[6vw] font-extrabold">
          {category.name}
        </p>
        <div className="flex flex-col items-center">
          <button
            onClick={toggleCategoryVisibility}
            className="relative bg-sky-100 py-[1vw] px-[1.5vw] rounded-full flex flex-row cursor-pointer"
          >
            <p className="uppercase text-blueColor-0 bg-transparent pr-[1vw] focus:outline-none text-[0.9vw] font-medium">
              Choose Category
            </p>
            <HiMiniChevronDown className="text-blueColor-0" />
          </button>
          <div
            className={`${
              isCategoryVisible ? "flex" : "hidden"
            } absolute flex-col items-start mt-[4vw] bg-white border border-sky-100 rounded-[1.2vw] w-[15vw]`}
          >
            {categories.map((category) => (
              <Link
                href={`/category/${category.id}`}
                className="uppercase text-blueColor-0 text-[0.9vw] font-medium px-[1vw] py-[0.6vw] rounded-[1.2vw] hover:bg-sky-100 w-full"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2vw]">
        {filteredPosts.map((post) => (
          <EventCard
            href={`/blog/${post.id}`}
            key={post.id}
            src={post.image}
            type={category.name}
            dateTime={post.published_date}
            title={post.title}
            content={post.heading}
          />
        ))}
      </div>
      <Link
        href={"/blog"}
        className="w-full flex flex-col items-center mt-[8vw]"
      >
        <button className="p-[1vw] text-white bg-skyColor-0 group hover:bg-blueColor-0 uppercase flex flex-row items-center">
          <p className="text-[1vw] font-semibold">Back To the Blog Page</p>
          <FaArrowRight className="text-[1.2vw] transition-transform transform -rotate-45 group-hover:rotate-0 ml-[1vw] duration-300" />
        </button>
      </Link>
    </div>
  );
};

export default CategoriesList;
