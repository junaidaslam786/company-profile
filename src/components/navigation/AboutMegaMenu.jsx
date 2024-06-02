import MegaMenuLayout from "@/components/navigation/MegaMenuLayout";
import Link from "next/link";

const AboutMegaMenu = () => {
  return (
    <>
      <div className="hidden md:block">
        <MegaMenuLayout>{Content()}</MegaMenuLayout>
      </div>
      <div className="md:hidden">{Content()}</div>
    </>
  );
};

const Content = () => (
  <div className="bg-white text-blueColor-0 md:mt-0 mt-[4vw] w-full">
    <h1 className="text-[1.9vw] md:text-[0.95vw] font-semibold mb-[2vw] md:mb-[1vw] font-sans underline">
      About Us
    </h1>
    <div className="w-full md:w-1/2">
      <Link href={'/aboutus'}>
        <div className="p-[2vw] md:p-[1vw] hover:bg-sky-100 hover:text-skyColor-0 md:rounded-lg rounded-md md:mt-[0.7vw] mt-[1.4vw]">
          <div>
            <p className="text-[2.4vw] md:text-[1.2vw] font-semibold">Labverse Story</p>
          </div>
          <p className="text-[1.9vw] md:text-[0.95vw]">
            Learn more about leadership team and company culture.
          </p>
        </div>
      </Link>
      <Link href={'/'}>
        <div className="p-[2vw] md:p-[1vw] border border-blue-300 bg-sky-50 hover:bg-sky-100 rounded-md md:rounded-lg">
          <div>
            <p className="text-[2.4vw] md:text-[1.2vw] font-semibold">
              Client Voices
              <span className="text-[1.5vw] md:text-[0.75vw] ml-[0.8vw] md:ml-[0.4vw] text-white bg-green-500 p-[0.4vw] md:p-[0.2vw] rounded-sm md:rounded-md">
                NEW
              </span>
            </p>
          </div>
          <p className="text-[1.9vw] md:text-[0.95vw]">
            Find authentic reviews that showcase our strengths.
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default AboutMegaMenu;
