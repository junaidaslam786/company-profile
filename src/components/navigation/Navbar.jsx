"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PriceMegaMenu from "@/components/navigation/PriceMegaMenu";
import AboutMegaMenu from "@/components/navigation/AboutMegaMenu";
import WhatWeDoMegaMenu from "@/components/navigation/WhatWeDoMegaMenu";
import SolutionsMegaMenu from "@/components/navigation/SolutionsMegaMenu";
import { FaBars } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState({
    AboutUs: false,
    WhatWeDo: false,
    Solutions: false,
    Pricing: false,
  });
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

  const toggleMegaMenu = (menu) => {
    setMegaMenuOpen((prev) => ({
      AboutUs: false,
      WhatWeDo: false,
      Solutions: false,
      Pricing: false,
      [menu]: !prev[menu],
    }));
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
        setNavbarBgColor("#ffffff");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderMegaMenu = () => {
    if (megaMenuOpen.AboutUs) {
      return <AboutMegaMenu />;
    } else if (megaMenuOpen.WhatWeDo) {
      return <WhatWeDoMegaMenu />;
    } else if (megaMenuOpen.Solutions) {
      return <SolutionsMegaMenu />;
    } else if (megaMenuOpen.Pricing) {
      return <PriceMegaMenu />;
    }
    return null; // No mega menu open
  };

  return (
    <nav
      className="fixed top-0 left-0 w-screen z-50"
      style={{ backgroundColor: navbarBgColor }}
    >
      <div className="relative flex items-center w-full h-[12vh] justify-between px-[1vw] md:justify-around">
        <div className="flex justify-between px-[5vw] md:px-0 w-full md:w-auto">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="font-semibold text-[4vw] md:text-[2.5vw] text-sky-500 hover:opacity-90 cursor-pointer">
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
          } absolute right-[1vw] top-[12vh] w-full bg-white shadow-md px-[4vw] py-[0.5vw]`}
        >
          <div className="flex flex-col items-start px-[1vw]">
            {["AboutUs", "WhatWeDo", "Solutions", "Pricing"].map((menu) => (
              <div key={menu} className="pb-[1vw]">
                <button
                  onClick={() => toggleMegaMenu(menu)}
                  className="text-blueColor-0 tracking-widest my-[2.3vw] font-semibold font-sans text-[3vw] hover:text-sky-500 flex items-center cursor-pointer"
                >
                  {menu.replace(/([A-Z])/g, " $1").trim()}
                  <FaChevronDown
                    className="ml-[0.6vw] text-[2vw]"
                    style={{
                      transform: megaMenuOpen[menu] ? "rotate(180deg)" : "none",
                    }}
                  />
                </button>
                {megaMenuOpen[menu] && renderMegaMenu()}
              </div>
            ))}
            <Link href="/cases" className="mb-[4vw]">
              <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[3vw] hover:text-sky-500 cursor-pointer">
                Cases
              </p>
            </Link>
            <Link href="/events" className="mb-[4vw]">
              <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[3vw] hover:text-sky-500 cursor-pointer">
                Events
              </p>
            </Link>
            <Link href="/blog" className="mb-[4vw]">
              <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[3vw] hover:text-sky-500 cursor-pointer">
                Blog
              </p>
            </Link>
            <Link href="/contactus" className="mb-[4vw]">
              <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[3vw] hover:text-sky-500 cursor-pointer">
                Contact Us
              </p>
            </Link>
            <a href="https://wa.me/923137844595">
              <p className="flex flex-row group items-center border py-[2vw] border-transparent cursor-pointer">
                <p className="text-orangeColor-0 mr-[1vw] font-semibold text-[2.8vw]">
                  LET&apos;S CHAT!
                </p>
                <IoIosMail className="text-[4vw] w-[5vw] h-[5vw] text-white bg-orangeColor-0 hover:bg-opacity-90 rounded-full p-[1vw] group-hover:scale-110 duration-200" />
              </p>
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex ${
            isBurgerMenuOpen ? "flex" : "hidden"
          } md:flex-row items-center justify-between`}
        >
          {["AboutUs", "WhatWeDo", "Solutions", "Pricing"].map((menu) => (
            <div
              key={menu}
              onClick={() => toggleMegaMenu(menu)}
              className="relative cursor-pointer"
            >
              <button className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.8vw] hover:text-sky-500 px-[0.75vw] rounded-md uppercase flex flex-row items-center">
                {menu.replace(/([A-Z])/g, " $1").trim()}
                <FaChevronDown
                  className="ml-[0.2vw] text-[0.6vw]"
                  style={{
                    transform: megaMenuOpen[menu] ? "rotate(180deg)" : "none",
                  }}
                />
              </button>
              {megaMenuOpen[menu] && renderMegaMenu()}
            </div>
          ))}
          <Link href="/cases">
            <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.8vw] hover:text-sky-500 px-[1vw] rounded-md uppercase cursor-pointer">
              Cases
            </p>
          </Link>
          <Link href="/events">
            <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.8vw] hover:text-sky-500 px-[1vw] rounded-md uppercase cursor-pointer">
              Events
            </p>
          </Link>
          <Link href="/blog">
            <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.8vw] hover:text-sky-500 px-[1vw] rounded-md uppercase cursor-pointer">
              Blog
            </p>
          </Link>
          <Link href="/contactus">
            <p className="text-blueColor-0 tracking-widest font-semibold font-sans text-[0.8vw] hover:text-sky-500 px-[1vw] rounded-md uppercase cursor-pointer">
              Contact Us
            </p>
          </Link>
        </div>
        <div
          className={`hidden md:flex ${isBurgerMenuOpen ? "flex" : "hidden"}`}
        >
          <a href="https://wa.me/923137844595">
            <span className="flex group items-center border border-transparent cursor-pointer">
              <p className="text-orangeColor-0 mr-[1vw] font-semibold text-[0.9vw]">
                LET&apos;S CHAT!
              </p>
              <IoIosMail className="text-[3vw] text-white bg-orangeColor-0 hover:bg-opacity-90 rounded-full p-[0.7vw] group-hover:scale-110 duration-200" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
