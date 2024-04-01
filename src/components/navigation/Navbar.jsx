'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import MegaMenu from "@/components/navigation/MegaMenu"; // Ensure this path matches your project structure

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
      <div className="relative flex items-center w-full h-24 justify-between px-4 md:justify-around">
        <div className="flex justify-between w-full md:w-auto">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <span className="font-semibold text-sky-500 hover:opacity-90 cursor-pointer" style={{fontSize:'2.5vw'}}>
                Labverse
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleBurgerMenu}>
              <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-600" />
            </button>
          </div>
        </div>

        {/* Burger Menu */}
        <div className={`md:hidden ${isBurgerMenuOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-white shadow-md py-2`}>
          <div className="flex flex-col items-start px-4">
            <Link href="/about-us" passHref>
              <span className="text-gray-600 hover:text-sky-500 py-2 cursor-pointer" style={{fontSize:'1vw'}}>About Us</span>
            </Link>
            <div className="py-2">
              <button onClick={toggleMegaMenu} className="text-gray-600 hover:text-sky-500 text-lg flex items-center cursor-pointer">
                What We Do <FontAwesomeIcon icon={faAngleDown} className="ml-1" style={{fontSize:'1vw'}} />
              </button>
              {megaMenuOpen && <MegaMenu />}
            </div>
            <Link href="/pricing" passHref>
              <span className="text-gray-600 hover:text-sky-500 py-2 cursor-pointer" style={{fontSize:'1vw'}}>Pricing</span>
            </Link>
            <Link href="/cases" passHref>
              <span className="text-gray-600 hover:text-sky-500 py-2 cursor-pointer" style={{fontSize:'1vw'}}>Cases</span>
            </Link>
            <Link href="/events" passHref>
              <span className="text-gray-600 hover:text-sky-500 py-2 cursor-pointer" style={{fontSize:'1vw'}}>Events</span>
            </Link>
            <Link href="/blog" passHref>
              <span className="text-gray-600 hover:text-sky-500 py-2 cursor-pointer" style={{fontSize:'1vw'}}>Blog</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="inline-flex items-center p-2 border border-transparent font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 mt-2 cursor-pointer" style={{fontSize:'1vw'}}>
                <FontAwesomeIcon icon={faComments} className="mr-1" style={{fontSize:'1vw'}} /> Let's Chat!
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex ${isBurgerMenuOpen ? "flex" : "hidden"} md:flex-row items-center`}>
          <Link href="/about-us" passHref>
            <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md font-medium uppercase cursor-pointer" style={{fontSize:'1vw'}}>About Us</span>
          </Link>
          <div
            ref={megaMenuRef}
            onClick={toggleMegaMenu}
            className="relative cursor-pointer"
          >
            <button className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md font-medium uppercase flex items-center" style={{fontSize:'1vw'}}>
              What We Do <FontAwesomeIcon icon={faAngleDown} className="ml-2" style={{fontSize:'1vw'}}/>
            </button>
            {megaMenuOpen && <MegaMenu />}
          </div>
          <Link href="/pricing" passHref>
            <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md font-medium uppercase cursor-pointer" style={{fontSize:'1vw'}}>Pricing</span>
          </Link>
          <Link href="/cases" passHref>
            <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md  font-medium uppercase cursor-pointer" style={{fontSize:'1vw'}}>Cases</span>
          </Link>
          <Link href="/events" passHref>
            <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md font-medium uppercase cursor-pointer" style={{fontSize:'1vw'}}>Events</span>
          </Link>
          <Link href="/blog" passHref>
            <span className="text-gray-600 hover:text-sky-500 px-3 py-2 rounded-md font-medium uppercase cursor-pointer" style={{fontSize:'1vw'}}>Blog</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="inline-flex items-center p-2 border border-transparent font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 cursor-pointer" style={{fontSize:'1vw'}}>
              <FontAwesomeIcon icon={faComments} className="mr-1 lg:mr-2" style={{fontSize:'1vw'}} /> Let's Chat!
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;