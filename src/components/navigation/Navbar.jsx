"use client";

import React, { useState, useRef, useEffect } from "react";
import MegaMenu from "@/components/navigation/MegaMenu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef(null); // Ref for the MegaMenu

  // Function to toggle the MegaMenu
  const toggleMegaMenu = () => {
    setMegaMenuOpen((prev) => !prev);
  };

  // Click-away listener to close the MegaMenu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megaMenuRef]);

  return (
    <nav className="fixed bg-white border-b w-screen border-gray-200 z-50">
      <div className="relative flex items-center w-full h-24 justify-around">
        <div className="flex-shrink-0 ">
          <Link href="/" passHref>
            <span className="text-base 2xl:text-5xl xl:text-3xl lg:text-2xl md:text-xl font-semibold text-sky-500 hover:opacity-90">
              LABVERSE
            </span>
            {/* Change 'AXON' to your brand name */}
          </Link>
        </div>
        <div className="flex">
          <div className="hidden md:flex md:space-x-4 items-center flex-grow">
            <Link href="/about-us" passHref>
              <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-xs 2xl:text-2xl xl:text-xl lg:text-lg font-medium uppercase cursor-pointer">
                About Us
              </span>
            </Link>
            <div
              ref={megaMenuRef}
              onClick={toggleMegaMenu}
              className="relative"
            >
              <button className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-xs 2xl:text-2xl xl:text-xl lg:text-lg font-medium uppercase cursor-pointer">
                What We Do
                <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
              </button>
              {megaMenuOpen && <MegaMenu />}
            </div>
            <Link href="/pricing" passHref>
              <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-xs 2xl:text-2xl xl:text-xl lg:text-lg font-medium uppercase cursor-pointer">
                Pricing
              </span>
            </Link>
            <Link href="/cases" passHref>
              <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-xs 2xl:text-2xl xl:text-xl lg:text-lg font-medium uppercase cursor-pointer">
                Cases
              </span>
            </Link>
            <Link href="/events" passHref>
              <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-xs 2xl:text-2xl xl:text-xl lg:text-lg font-medium uppercase cursor-pointer">
                Events
              </span>
            </Link>
            <Link href="/blog" passHref>
              <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md text-xs 2xl:text-2xl xl:text-xl lg:text-lg font-medium uppercase cursor-pointer">
                Blog
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Link href="/contact" passHref>
            <span className="inline-flex items-center p-2 border border-transparent text-xs lg:text-sm xl:text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600">
              <FontAwesomeIcon
                icon={faComments}
                className="h-3 w-3 mr-1 lg:h-4 lg:w-4 lg:mr-2"
              />
              Let's Chat!
            </span>
          </Link>
        </div>
        {/* Add mobile menu button here if necessary */}
      </div>
    </nav>
  );
}
