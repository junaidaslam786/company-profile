"use client";

import React, { useState, useEffect } from "react";
import EventCard from "@/components/constants/events/EventCard";

const Event2 = () => {
  const [eventCards, setEventCards] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/events/`);
        const data = await response.json();
        setEventCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-[3vw] md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 h-full">
      {eventCards.map((event) => (
        <EventCard
          href={`/events`}
          type={"webinar"}
          key={event.id}
          src={event.image}
          dateTime={new Date(event.start_time).toLocaleString()}
          title={event.title}
          content={event.description}
        />
      ))}
    </div>
  );
};

export default Event2;
