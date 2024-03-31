import FaceBook from "../icons/fb";
import Instagram from "../icons/insta";
import Linkedin from "../icons/linkedin";
import X from "../icons/x";

const Footer = () => {
  // Dummy data for each section
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

  const mail = [{ title: "info@labverse.co", link: "/info" }];

  return (
    <div
      className="flex flex-row w-full bg-white p-5 pt-28"
      style={{ height: "83vh" }}
    >
      <div className="w-2/5 pl-24 pr-60">
        <h5 className="text-lg 2xl:text-5xl xl:text-3xl lg:text-2xl md:text-xl font-semibold text-sky-500 hover:opacity-90 cursor-pointer">
          LABVERSE
        </h5>
        <p className="text-3xl text-gray-600 mt-16">
          We help our clients transform their business ideas into tangible
          results by developing unique software solutions.
        </p>
        <ul className="mt-6">
          {mail.map((section, index) => (
            <li key={index}>
              <a
                href={section.link}
                className="text-slate-700 hover:text-amber-600 text-4xl font-semibold"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between w-2/3 mt-16">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaceBook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a href="#">
            <X />
          </a>
        </div>
      </div>

      <div className="w-full h-full sm:w-1/2 md:w-1/5 px-4">
        <h5 className="font-semibold ml-6 mt-2 text-black text-4xl">Company</h5>
        <ul className="ml-8 mt-2 h-3/5 flex flex-col justify-around">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={section.link}
                className="text-black hover:text-amber-600 text-2xl"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5 px-4">
        <h5 className="font-semibold ml-6 mt-2 text-black text-4xl">
          Services
        </h5>
        <ul className="ml-2 mt-2 h-3/5 flex flex-col justify-around">
          {services.map((service, index) => (
            <li key={index}>
              <a
                href={service.link}
                className="text-black hover:text-amber-600 text-2xl"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5 px-4">
        <h5 className="font-semibold ml-6 mt-2 text-black text-4xl">
          Services
        </h5>
        <ul className="ml-2 mt-2 h-3/5 flex flex-col justify-around">
          {services1.map((service, index) => (
            <li key={index}>
              <a
                href={service.link}
                className="text-black hover:text-amber-600 text-2xl"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5 px-4">
        <h5 className="font-semibold mt-2 text-black text-4xl">Industries</h5>
        <ul className="ml-2 mt-2 h-3/5 flex flex-col justify-around">
          {industries.map((service, index) => (
            <li key={index}>
              <a
                href={service.link}
                className="text-black hover:text-amber-600 text-2xl"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
