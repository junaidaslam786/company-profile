import Blog1 from "@/components/blog/Blog1";
import Blog2 from "@/components/blog/Blog2";
import Blog3 from "@/components/blog/Blog3";

export default function Blog() {
  return (
    <div className="flex min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <Blog1 />
      <Blog2 />
      <Blog3 />
    </div>
  );
}
