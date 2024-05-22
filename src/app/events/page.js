import EventHeroSection from "@/components/events/EventHeroSection";
import EventCards from "@/components/events/EventCards";
import EventWorkText from "@/components/events/EventWorkText";

const Events = () => {
  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <EventHeroSection />
      <EventCards />
      <EventWorkText />
    </div>
  );
};
export default Events;
