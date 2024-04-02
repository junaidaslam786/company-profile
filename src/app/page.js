import HeroSection from "@/components/home/HeroSection1";
import Herosection2 from "@/components/home/HeroSection2";
import HeroSection3 from "@/components/home/HeroSection3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <div className="w-full">
        <Herosection2 />
      </div>
      <div className="w-full">
        <HeroSection3 /> 
      </div>
    </main>
  );
}
