import Case from "@/components/cases/Case1";
import Case2 from "@/components/cases/Case2";
import Case3 from "@/components/cases/Case3";

export default function Cases() {
  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <Case />
      <Case2 />
      <Case3 />
    </div>
  );
}
