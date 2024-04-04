import HeroSection from "@/components/home/HeroSection1";
import Herosection2 from "@/components/home/HeroSection2";
import HeroSection3 from "@/components/home/HeroSection3";
import HeroSection4 from "@/components/home/HeroSection4";
import HeroSection5 from "@/components/home/HeroSection5";
import HeroSection6 from "@/components/home/HeroSection6";
import HeroSection7 from "@/components/home/HeroSection7";
import HeroSection8 from "@/components/home/HeroSection8";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <HeroSection />
      <Herosection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HeroSection6 />
      <HeroSection7 />
      <HeroSection8 />
    </main>
  );
}
