import AboutCards from "@/components/aboutus/AboutCards";
import AboutUsHeroSection from "@/components/aboutus/AboutUsHeroSection";
import Mission from "@/components/aboutus/Mission";
import Popularity from "@/components/aboutus/Popularity";

const Blog = () => {
  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <AboutUsHeroSection />
      <Popularity />
      <Mission />
      <AboutCards />
    </div>
  );
};
export default Blog;
