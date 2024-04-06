import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFlutter } from "react-icons/bi";
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const CaseCard = ({
  industry,
  businessType,
  countrySource,
  detail,
  type,
  tech1,
  tech2,
  tech3,
  feacturedImage,
  featuredBackground,
}) => {
  return (
    <Link href={'/cases'} className="h-[33vw] w-full">
      <div className="w-full h-[33vw] flex flex-row items-center justify-between">
        <div className="w-1/2 h-1/2">
          <div className="w-[95%] h-full flex flex-col items-start justify-between">
            <div className="flex flex-row uppercase items-baseline">
              <p className="text-[2vw] font-extrabold text-blue-950">
                {industry}
              </p>
              <p className="text-[0.8vw] text-blue-950 font-medium mx-[2vw]">
                /
              </p>
              <div className="flex flex-row">
                <p className="text-[0.8vw] text-blue-950 font-medium">
                  {businessType}
                </p>
                <Image
                  src={countrySource}
                  width={500}
                  height={500}
                  className="w-[1.52vw] h-[1.11vw] ml-[2vw]"
                />
              </div>
            </div>
            <div>
              <p className="text-[1.2vw] text-gray-500">{detail}</p>
            </div>
            <div className="flex flex-row uppercase items-center">
              <div className="flex flex-row items-center">
                <p className="text-[0.8vw] text-blue-950 font-medium">{type}</p>
                <p className="text-[0.8vw] text-blue-950 font-medium mx-[1vw]">
                  /
                </p>
              </div>
              <div className="flex flex-row items-center">
                <BiLogoFlutter className="text-[2vw] mr-[1vw]" />
                <p className="text-[0.8vw] text-blue-950 font-medium">
                  {tech1}
                </p>
                <p className="text-[0.8vw] text-blue-950 font-medium mx-[1vw]">
                  /
                </p>
              </div>
              <div className="flex flex-row items-center">
                <SiKotlin className="text-[1.5vw] mr-[1vw]" />
                <p className="text-[0.8vw] text-blue-950 font-medium">
                  {tech2}
                </p>
                <p className="text-[0.8vw] text-blue-950 font-medium mx-[1vw]">
                  /
                </p>
              </div>
              <div className="flex flex-row items-center">
                <FaPython className="text-[2vw] mr-[1vw]" />
                <p className="text-[0.8vw] text-blue-950 font-medium">
                  {tech3}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div
            className={`h-[32vw] w-[45.5vw] ${featuredBackground} bg-opacity-20 overflow-hidden flex flex-col items-center justify-center`}
          >
            <Image src={feacturedImage} width={300} height={300} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
