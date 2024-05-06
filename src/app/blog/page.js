import Blog1 from "@/components/blog/Blog1";
import Blog2 from "@/components/blog/Blog2";

const Blog = () => {
  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <Blog1 />
      <Blog2 />
    </div>
  );
};
export default Blog;
