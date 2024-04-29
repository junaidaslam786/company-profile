import React from "react";
import Image from "next/image";
import Link from "next/link";

const CaseCard = ({
  title,
  industry,
  countrySource,
  detail,
  type,
  technologies,
  featuredImage,
  featuredBackground,
}) => {
  return (
    <Link href={"/cases"} className="h-[33vw] w-full">
      <div className="w-full h-[33vw] flex flex-row items-center justify-between">
        <div className="w-1/2 h-1/2">
          <div className="w-[95%] h-full flex flex-col items-start justify-between">
            <div className="flex flex-row uppercase items-baseline">
              <p className="text-[2vw] font-extrabold text-blueColor-0">
                {title}
              </p>
              <p className="text-[0.8vw] text-blueColor-0 font-medium mx-[2vw]">
                /
              </p>
              <div className="flex flex-row">
                <p className="text-[0.8vw] text-blueColor-0 font-medium">
                  {industry}
                </p>
                <Image
                  src={countrySource}
                  width={500}
                  height={500}
                  alt="Image Failed to Load"
                  className="w-[1.52vw] h-[1.11vw] ml-[2vw]"
                />
              </div>
            </div>
            <div>
              <p className="text-[1.2vw] text-gray-500">{detail}</p>
            </div>
            <div className="flex flex-row uppercase items-center">
              <div className="flex flex-row items-center">
                <p className="text-[0.8vw] text-blueColor-0 font-medium">
                  {type}
                </p>
                <p className="text-[0.8vw] text-blueColor-0 font-medium mx-[1vw]">
                  /
                </p>
              </div>
              <div className="flex flex-row items-center">
                {technologies.map((tech, index) => (
                  <React.Fragment key={tech.id}>
                    <div className="flex items-center mr-[1vw]">
                      <Image
                        src={tech.image}
                        alt={`${tech.name} Image`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p className="text-[0.8vw] text-blueColor-0 font-medium">
                        {tech.name}
                      </p>
                    </div>
                    {index !== technologies.length - 1 && (
                      <p className="text-[0.8vw] text-blueColor-0 font-medium mx-[1vw]">
                        /
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div
            className={`h-[32vw] w-[45.5vw] ${featuredBackground} bg-opacity-20 overflow-hidden flex flex-col items-center justify-center`}
          >
            <Image src={featuredImage} width={300} height={300} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
