import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  const sections = [
    { title: "About Us", link: "/about" },
    { title: "Cases", link: "/cases" },
    { title: "Careers", link: "/careers" },
    { title: "Expertise", link: "/expertise" },
    { title: "Solutions", link: "/solutions" },
    { title: "Blog", link: "/blog" },
    { title: "Events", link: "/events" },
    { title: "Pricing", link: "/pricing" },
  ];

  const services = [
    { title: "Quality Assurance", link: "/software" },
    { title: "Software Product Development", link: "/software-product" },
    { title: "Mobile Development", link: "/mobile" },
    { title: "UX/UI Design", link: "/ux-ui-design" },
    { title: "Back End Development", link: "/back-end" },
    { title: "Full Cycle Development", link: "/full-cycle" },
  ];

  const services1 = [
    { title: "Quality Assurance", link: "/quality" },
    { title: "Business Analysis", link: "/business" },
    { title: "Dedicated Teams", link: "/dedicated" },
    { title: "Extended Teams", link: "/extended" },
    { title: "Next.Js Development", link: "/next-js" },
  ];

  const industries = [
    { title: "Education", link: "/education" },
    { title: "Insurance", link: "/insurance" },
    { title: "Real Estate", link: "/real-estate" },
    { title: "Finance & Banking", link: "/finance" },
    { title: "AdTech", link: "/adtech" },
    { title: "Cryptocurrency", link: "/cryptocurrency" },
  ];

  return (
    <div
      className="flex flex-col md:flex-row w-full overflow-x-hidden bg-white p-5 pt-20"
      style={{ height: "83vh" }}
    >
      <div className="w-2/5 flex flex-col items-center justify-start">
        <div>
          <h5
            className="font-semibold text-sky-500 hover:opacity-90 cursor-pointer"
            style={{ fontSize: "2.5vw" }}
          >
            Labverse
          </h5>
          <p
            className="text-gray-600 mt-16 leading-snug"
            style={{ fontSize: "1vw" }}
          >
            We help our clients transform their <br /> business ideas into
            tangible results <br /> by developing unique software solutions.
          </p>
          <div className="mt-5">
            <Link
              href="/info"
              className="text-slate-700 hover:text-orange-500 font-semibold"
              style={{ fontSize: "1.5vw" }}
            >
              info@labverse.co
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-1/2 mr-12 mt-5">
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebookF
              className="fill-slate-700 hover:fill-orange-500"
              style={{ fontSize: "1vw" }}
            />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn
              className="fill-slate-700 hover:fill-orange-500"
              style={{ fontSize: "1vw" }}
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <RiInstagramFill
              className="fill-slate-700 hover:fill-orange-500"
              style={{ fontSize: "1vw" }}
            />
          </Link>
          <Link href="https://www.telegram.com">
            <BiLogoTelegram
              className="fill-slate-700 hover:fill-orange-500"
              style={{ fontSize: "1vw" }}
            />
          </Link>
        </div>
      </div>
      <div className="w-full md:flex md:flex-row md:justify-between grid grid-cols-2 mt-10 md:mt-0">
        <div className="w-full h-full sm:w-1/2 md:w-1/5 px-4">
          <h5
            className="font-semibold mt-2 text-slate-800 font-sans"
            style={{ fontSize: "1.2vw" }}
          >
            COMPANY
          </h5>
          <ul className="ml-2 mt-2 h-3/5">
            {sections.map((section, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={section.link}
                  className="text-slate-700 hover:text-orange-500"
                  style={{ fontSize: "1vw" }}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 px-4">
          <h5
            className="font-semibold mt-2 text-slate-800 font-sans"
            style={{ fontSize: "1.2vw" }}
          >
            SERVICES
          </h5>
          <ul className="ml-2 mt-2 h-3/5">
            {services.map((service, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={service.link}
                  className="text-slate-700 hover:text-orange-500"
                  style={{ fontSize: "1vw" }}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 px-4">
          <h5
            className="font-semibold mt-2 text-slate-800 font-sans"
            style={{ fontSize: "1.2vw" }}
          >
            SERVICES
          </h5>
          <ul className="ml-2 mt-2 h-3/5">
            {services1.map((service, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={service.link}
                  className="text-slate-700 hover:text-orange-500"
                  style={{ fontSize: "1vw" }}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 px-4">
          <h5
            className="font-semibold mt-2 text-slate-800 font-sans"
            style={{ fontSize: "1.2vw" }}
          >
            INDUSTRIES
          </h5>
          <ul className="ml-2 mt-2 h-3/5">
            {industries.map((service, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={service.link}
                  className="text-slate-700 hover:text-orange-500"
                  style={{ fontSize: "1vw" }}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
