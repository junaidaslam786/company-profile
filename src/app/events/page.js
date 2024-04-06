import Event from "@/components/events/Event1";
import Event2 from "@/components/events/Event2";
import Event3 from "@/components/events/Event3";

export default function Events() {
  return (
    <div className="flex min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <Event />
      <Event2 />
      <Event3 />
    </div>
  );
}
