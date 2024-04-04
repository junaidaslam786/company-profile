"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaBars } from "react-icons/fa";

import MegaMenu from "@/components/navigation/MegaMenu";

const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const megaMenuRef = useRef(null); // Ref for the MegaMenu

  // Function to toggle the MegaMenu
  const toggleMegaMenu = () => {
    setMegaMenuOpen((prev) => !prev);
  };

  // Function to toggle the burger menus
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  // Click-away listener to close the MegaMenu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megaMenuRef]);

  return (
    <nav className="fixed bg-white border-b w-screen border-gray-200 z-50">
      <div className="relative flex items-center w-full h-[12vh] justify-between px-4 md:justify-around">
        <div className="flex justify-between w-full md:w-auto">
          <div className="flex-shrink-0">
            <Link href="/dashboard" passHref>
              <span className="font-semibold text-[2.5vw] text-sky-500 hover:opacity-90 cursor-pointer">
                Labverse
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleBurgerMenu}>
              <FaBars className="text-[2.5vw] text-gray-600" />
            </button>
          </div>
        </div>

        {/* Burger Menu */}
        <div
          className={`md:hidden ${
            isBurgerMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md py-2`}
        >
          <div className="flex flex-col items-start px-4">
            <Link href="/about-us" passHref>
              <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 py-2 cursor-pointer">
                About Us
              </span>
            </Link>
            <div className="py-2">
              <button
                onClick={toggleMegaMenu}
                className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 text-lg flex items-center cursor-pointer"
              >
                What We Do
                <FaChevronDown className="ml-1 text-1vw" />
              </button>
              {megaMenuOpen && <MegaMenu />}
            </div>
            <Link href="/pricing" passHref>
              <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 py-2 cursor-pointer">
                Pricing
              </span>
            </Link>
            <Link href="/cases" passHref>
              <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 py-2 cursor-pointer">
                Cases
              </span>
            </Link>
            <Link href="/events" passHref>
              <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 py-2 cursor-pointer">
                Events
              </span>
            </Link>
            <Link href="/blog" passHref>
              <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 py-2 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/careers" passHref>
              <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 py-2 cursor-pointer">
                Careers
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="flex group items-center border border-transparent cursor-pointer">
                <p className="text-orange-500 mr-[1vw] font-semibold text-[0.8vw]">
                  LET'S CHAT!
                </p>
                <IoIosMail className="text-[3vw] text-white bg-orange-500 hover:bg-orange-600 rounded-full p-[0.4vw] group-hover:scale-110 duration-200" />
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex ${
            isBurgerMenuOpen ? "flex" : "hidden"
          } md:flex-row items-center justify-between`}
        >
          <Link href="/about-us" passHref>
            <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              About Us
            </span>
          </Link>
          <div
            ref={megaMenuRef}
            onClick={toggleMegaMenu}
            className="relative cursor-pointer"
          >
            <button className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase flex items-center">
              What We Do
              <FaChevronDown className="ml-2 text-[1vw]" />
            </button>
            {megaMenuOpen && <MegaMenu />}
          </div>
          <Link href="/pricing" passHref>
            <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Pricing
            </span>
          </Link>
          <Link href="/cases" passHref>
            <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Cases
            </span>
          </Link>
          <Link href="/events" passHref>
            <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Events
            </span>
          </Link>
          <Link href="/blog" passHref>
            <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Blog
            </span>
          </Link>
          <Link href="/careers" passHref>
            <span className="text-blue-950 tracking-widest font-semibold text-[0.8vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Careers
            </span>
          </Link>
        </div>
        <div
          className={`hidden md:flex ${isBurgerMenuOpen ? "flex" : "hidden"}`}
        >
          <Link href="/contact" passHref>
            <span className="flex group items-center border border-transparent cursor-pointer">
              <p className="text-orange-500 mr-[1vw] font-semibold text-[0.8vw]">
                LET'S CHAT!
              </p>
              <IoIosMail className="text-[3vw] text-white bg-orange-500 hover:bg-orange-600 rounded-full p-[0.4vw] group-hover:scale-110 duration-200" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
