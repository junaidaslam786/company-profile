import MegaMenuLayout from "@/components/navigation/MegaMenuLayout";

const AboutMegaMenu = () => {
  return (
    <MegaMenuLayout>
      <div className="flex h-full">
        <div className="w-1/2 pr-[1vw]">
          <h3 className="font-semibold text-[0.9vw] font-sans underline mb-[1vw]">
            SOLUTIONS
          </h3>
          <div className="mb-4">
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-2">
              <h4 className="font-semibold text-orange-600">
                Identity & Access Management{" "}
                <span className="bg-green-200 text-green-600 px-2 py-1 text-xs rounded-full ml-2">
                  NEW
                </span>
              </h4>
              <p>Empower your app with IAM features</p>
            </div>
            <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-2">
              <h4 className="font-semibold text-purple-600">Libraria</h4>
              <p>Smart localization platform</p>
            </div>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-600">Axactly</h4>
              <p>A product discovery workshop</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 pl-4">
          <h3 className="font-semibold text-[0.9vw] font-sans underline mb-[1vw]">
            READY-TO-APPLY
          </h3>
          <div className="mb-4">
            <div className="bg-teal-100 border-l-4 border-teal-500 p-4 mb-2">
              <h4 className="font-semibold text-teal-600">
                Elements for Data Presentation{" "}
                <span className="bg-green-200 text-green-600 px-2 py-1 text-xs rounded-full ml-2">
                  NEW
                </span>
              </h4>
              <p>Clickable Prototype</p>
            </div>
            <div className="bg-green-100 border-l-4 border-green-500 p-4">
              <h4 className="font-semibold text-green-600">
                Elements for ATS, CRM, ERP
              </h4>
              <p>Clickable Prototype</p>
            </div>
          </div>
        </div>
      </div>
    </MegaMenuLayout>
  );
};

export default AboutMegaMenu;
