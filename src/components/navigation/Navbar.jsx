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
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");
  const megaMenuRef = useRef(null);

  const toggleMegaMenu = () => {
    setMegaMenuOpen((prev) => !prev);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const navbarTransparentHeight = navbarHeight * 2;

      if (scrollPosition < navbarTransparentHeight) {
        const opacity = scrollPosition / navbarTransparentHeight;
        setNavbarBgColor(`rgba(255, 255, 255, ${opacity})`);
      } else {
        setNavbarBgColor("#ffffff"); //
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-screen z-50"
      style={{ backgroundColor: navbarBgColor }}
    >
      <div className="relative flex items-center w-full h-[12vh] justify-between px-4 md:justify-around">
        <div className="flex justify-between w-full md:w-auto">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
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
          } absolute right-[1vw] top-[8vh] w-1/3 bg-white shadow-md py-2`}
        >
          <div className="flex flex-col items-start px-4">
            <div className="py-[2vw]">
              <button
                onClick={toggleMegaMenu}
                className="text-blueColor-0 tracking-widest font-semibold font-sans text-[1.5vw] hover:text-sky-500 flex items-center cursor-pointer"
              >
                About Us
                <FaChevronDown className="ml-[0.6vw] text-[1vw]" style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none' }} />
              </button>
              {megaMenuOpen && <MegaMenu />}
            </div>
            <div className="py-[2vw]">
              <button
                onClick={toggleMegaMenu}
                className="text-blueColor-0 tracking-widest font-semibold font-sans text-[1.5vw] hover:text-sky-500 flex items-center cursor-pointer"
              >
                What We Do
                <FaChevronDown className="ml-[0.6vw] text-[1vw]" style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none' }} />
              </button>
              {megaMenuOpen && <MegaMenu />}
            </div>
            <div className="pt-[2vw] pb-[0.5vw]">
              <button
                onClick={toggleMegaMenu}
                className="text-blueColor-0 tracking-widest font-semibold font-sans text-[1.5vw] hover:text-sky-500 flex items-center cursor-pointer"
              >
                Pricing
                <FaChevronDown className="ml-[0.6vw] text-[1vw]" style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none' }} />
              </button>
              {megaMenuOpen && <MegaMenu />}
            </div>
            <Link href="/cases" passHref>
              <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[1.5vw] hover:text-sky-500 cursor-pointer">
                Cases
              </span>
            </Link>
            <Link href="/events" passHref>
              <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[1.5vw] hover:text-sky-500 cursor-pointer">
                Events
              </span>
            </Link>
            <Link href="/blog" passHref>
              <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[1.5vw] hover:text-sky-500 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/careers" passHref>
              <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[1.5vw] hover:text-sky-500 cursor-pointer">
                Careers
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="flex flex-row group items-center border py-[2vw] border-transparent cursor-pointer">
                <p className="text-orangeColor-0 mr-[1vw] font-semibold text-[1.5vw]">
                  LET'S CHAT!
                </p>
                <IoIosMail className="text-[3vw] w-[3.5vw] h-[3.5vw] text-white bg-orangeColor-0 hover:bg-opacity-90 rounded-full p-[0.5vw] group-hover:scale-110 duration-200" />
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
          <div
            ref={megaMenuRef}
            onClick={toggleMegaMenu}
            className="relative cursor-pointer"
          >
            <button className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.9vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase flex items-center">
              About Us
              <FaChevronDown className="ml-1 text-[1vw]" style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none' }} />
            </button>
            {megaMenuOpen && <MegaMenu />}
          </div>
          <div
            ref={megaMenuRef}
            onClick={toggleMegaMenu}
            className="relative cursor-pointer"
          >
            <button className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.9vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase flex items-center">
              What We Do
              <FaChevronDown className="ml-1 text-[1vw]" style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none' }} />
            </button>
            {megaMenuOpen && <MegaMenu />}
          </div>
          <div
            ref={megaMenuRef}
            onClick={toggleMegaMenu}
            className="relative cursor-pointer"
          >
            <button className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.9vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase flex items-center">
              Pricing
              <FaChevronDown className="ml-1 text-[1vw]" style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none' }} />
            </button>
            {megaMenuOpen && <MegaMenu />}
          </div>
          <Link href="/cases" passHref>
            <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.9vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Cases
            </span>
          </Link>
          <Link href="/events" passHref>
            <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.9vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Events
            </span>
          </Link>
          <Link href="/blog" passHref>
            <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.9vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Blog
            </span>
          </Link>
          <Link href="/careers" passHref>
            <span className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.9vw] hover:text-sky-500 px-3 py-2 rounded-md uppercase cursor-pointer">
              Careers
            </span>
          </Link>
        </div>
        <div
          className={`hidden md:flex ${isBurgerMenuOpen ? "flex" : "hidden"}`}
        >
          <Link href="/contact" passHref>
            <span className="flex group items-center border border-transparent cursor-pointer">
              <p className="text-orangeColor-0 mr-[1vw] font-semibold text-[0.9vw]">
                LET'S CHAT!
              </p>
              <IoIosMail className="text-[3vw] text-white bg-orangeColor-0 hover:bg-opacity-90 rounded-full p-[0.4vw] group-hover:scale-110 duration-200" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
