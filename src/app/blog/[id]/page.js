"use client";

import BlogDetail from "@/components/blogDetails/BlogDetail";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <BlogDetail id={id} />
    </div>
  );
};

export default BlogDetails;
