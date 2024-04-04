import Case from "@/components/cases/Case1";
import Case2 from "@/components/cases/Case2";

export default function Cases() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Case />
      <Case2 />
    </div>
  );
}
