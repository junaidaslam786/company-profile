"use client";

import React, { useState, useEffect } from "react";
import EventCard from "@/components/constants/events/EventCard";
import Loader from "@/components/constants/loader/Loader";

const EventCards = () => {
  const [eventCards, setEventCards] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/events/`);
        const data = await response.json();
        setEventCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setFetchingData(false);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading || fetchingData) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (eventCards.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p>No event available</p>
      </div>
    );
  }
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

export default EventCards;
