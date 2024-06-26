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
      className="flex flex-col md:flex-row w-full border-t border-gray-100 overflow-x-hidden bg-white p-5 pt-20 h-[85vh]"
    >
      <div className="md:w-2/5 w-4/5 ml-[10%] md:ml-0 flex flex-col items-start justify-start">
        <div>
          <h5
            className="font-semibold text-sky-500 hover:opacity-90 cursor-pointer text-[5vws] md:text-[2.5vw]"
          >
            Labverse
          </h5>
          <p
            className="text-gray-600 md:mt-[4vw] mt-[8vw] leading-snug md:text-[0.9vw] text-[3vw]"
          >
            We help our clients transform their <br /> business ideas into
            tangible results <br /> by developing unique software solutions.
          </p>
          <div className="mt-5">
            <Link
              href="/info"
              className="text-blueColor-0 hover:text-orangeColor-0 font-semibold md:text-[1.5vw] text-[4vw]"
            >
              info@labverse.co
            </Link>
          </div>
        </div>
        <div className="flex justify-between md:w-1/2 w-2/4 mr-12 mt-4">
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebookF
              className="fill-blueColor-0 hover:fill-orangeColor-0 md:text-[0.9vw] text-[4vw]"
            />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn
              className="fill-blueColor-0 hover:fill-orangeColor-0 md:text-[0.9vw] text-[4vw]"
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <RiInstagramFill
              className="fill-blueColor-0 hover:fill-orangeColor-0 md:text-[0.9vw] text-[4vw]"
            />
          </Link>
          <Link href="https://www.telegram.com">
            <BiLogoTelegram
              className="fill-blueColor-0 hover:fill-orangeColor-0 md:text-[0.9vw] text-[4vw]"
            />
          </Link>
        </div>
      </div>
      <div className="w-full md:flex md:flex-row md:justify-between grid md-cols-2 col-1 mt-10 md:mt-0">
        <div className="w-full h-full sm:w-1/2 md:w-1/5 px-4">
          <h5
            className="font-semibold mt-2 text-blueColor-0 font-sans md:text-[1.2vw] text-[3.5vw]"
          >
            COMPANY
          </h5>
          <ul className="md:ml-2 md:mt-2  h-3/5">
            {sections.map((section, index) => (
              <li key={index} className="md:mt-5 mt-3">
                <Link
                  href={section.link}
                  className="text-blueColor-0 hover:text-orangeColor-0 md:text-[0.9vw] text-[3vw]"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:mt-0 mt-6 md:w-1/5 px-4">
          <h5
            className="font-semibold md:mt-2 mt-4 text-blueColor-0 font-sans md:text-[1.2vw] text-[3.5vw]"
          >
            SERVICES
          </h5>
          <ul className="md:mt-2 h-3/5">
            {services.map((service, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={service.link}
                  className="text-blueColor-0 hover:text-orangeColor-0 md:text-[0.9vw] text-[3vw]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:mt-0 mt-6 md:w-1/5 px-4">
          <h5
            className="font-semibold md:mt-2 mt-6 text-blueColor-0 font-sans md:text-[1.2vw] text-[3.5vw]"
          >
            SERVICES
          </h5>
          <ul className="mt-2 h-3/5">
            {services1.map((service, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={service.link}
                  className="text-blueColor-0 hover:text-orangeColor-0 md:text-[0.9vw] text-[3vw]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 md:mt-0 mt-6 px-4">
          <h5
            className="font-semibold mt-2 text-blueColor-0 font-sans md:text-[1.2vw] text-[3.5vw]"
          >
            INDUSTRIES
          </h5>
          <ul className="md:ml-2 mt-2 h-3/5">
            {industries.map((service, index) => (
              <li key={index} className="mt-5">
                <Link
                  href={service.link}
                  className="text-blueColor-0 hover:text-orangeColor-0 md:text-[0.9vw] text-[3vw]"
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
