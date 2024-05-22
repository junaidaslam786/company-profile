import CategorizedBlogs from "@/components/blog/CategorizedBlogs";
import FeaturedBlogs from "@/components/blog/FeaturedBlogs";

const Blog = () => {
  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <FeaturedBlogs />
      <CategorizedBlogs />
    </div>
  );
};
export default Blog;
