import MegaMenuLayout from "@/components/navigation/MegaMenuLayout";
import Link from "next/link";

const SolutionsMegaMenu = () => {
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
  <div className="flex flex-col md:flex-row h-full w-full md:mt-0 mt-[4vw]">
    <div className="w-full md:w-1/2 md:pr-[1vw]">
      <h3 className="font-semibold text-[1.8vw] md:text-[0.9vw] font-sans underline mb-[1vw]">
        SOLUTIONS
      </h3>
      <div className="mb-[1vw]">
        <Link href={"/"}>
          <div className="bg-orange-100 border-l-[1vw] md:border-l-[0.5vw] border-orange-500 p-[2vw] md:p-[1vw] mb-[1vw] md:[0.5vw]">
            <h4 className="text-[2.4vw] md:text-[1.2vw] font-medium text-orange-600">
              Identity & Access Management{" "}
              <span className="bg-green-200 text-green-600 px-[1vw] py-[0.6vw] md:px-[0.5vw] md:py-[0.3vw] text-[1.8vw] ml-[1vw] md:text-[0.9vw] rounded-sm md:rounded-md md:ml-[0.5vw]">
                NEW
              </span>
            </h4>
            <p className="text-[2vw] md:text-[1vw]">
              Empower your app with IAM features
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="bg-purple-100 border-l-[1vw] md:border-l-[0.5vw] border-purple-500 p-[2vw] md:p-[1vw] mb-[1vw] md:mb-[0.5vw]">
            <h4 className="text-[2.4vw] md:text-[1.2vw] font-medium text-purple-600">
              Libraria
            </h4>
            <p className="text-[2vw] md:text-[1vw]">
              Smart localization platform
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="bg-blue-100 border-l-[1vw] md:border-l-[0.5vw] border-blue-500 p-[2vw] md:p-[1vw]">
            <h4 className="text-[2.4vw] md:text-[1.2vw] font-medium text-blue-600">
              Axactly
            </h4>
            <p className="text-[2vw] md:text-[1vw]">
              A product discovery workshop
            </p>
          </div>
        </Link>
      </div>
    </div>
    <div className="w-full md:w-1/2 md:pl-[1vw] md:mt-0 mt-[4vw]">
      <h3 className="font-semibold text-[1.8vw] md:text-[0.9vw] font-sans underline mb-[2vw] md:mb-[1vw]">
        READY-TO-APPLY
      </h3>

      <div className="mb-[2vw] md:[1vw]">
        <Link href={"/"}>
          <div className="bg-teal-100 border-l-[1vw] md:border-l-[0.5vw] border-teal-500 p-[2vw] md:p-[1vw] mb-[1vw] md:mb-[0.5vw]">
            <h4 className="text-[2.4vw] md:text-[1.2vw] font-medium text-teal-600">
              Elements for Data Presentation
              <span className="bg-green-200 text-green-600 px-[1vw] py-[0.6vw] md:px-[0.5vw] md:py-[0.3vw] text-[1.8vw] ml-[1vw] md:text-[0.9vw] rounded-sm md:rounded-md md:ml-[0.5vw]">
                NEW
              </span>
            </h4>
            <p className="text-[2vw] md:text-[1vw]">Clickable Prototype</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="bg-green-100 border-l-[1vw] md:border-l-[0.5vw] border-green-500 p-[2vw] md:p-[1vw]">
            <h4 className="text-[2.4vw] md:text-[1.2vw] font-medium text-green-600">
              Elements for ATS, CRM, ERP
            </h4>
            <p className="text-[2vw] md:text-[1vw]">Clickable Prototype</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default SolutionsMegaMenu;
