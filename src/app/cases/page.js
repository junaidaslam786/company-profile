import CaseHeroSection from "@/components/cases/CaseHeroSection";
import CaseHeader from "@/components/cases/CaseHeader";
import CaseCards from "@/components/cases/CaseCards";

const Cases = () => {
  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <CaseHeroSection />
      <CaseHeader />
      <CaseCards />
    </div>
  );
};
export default Cases;
