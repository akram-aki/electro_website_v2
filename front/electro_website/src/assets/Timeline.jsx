import TimelineCore from "./TimelineCore";
import EventCard from "./EventCard";
import { useContext } from "react";
import { userContext } from "../User";

export default function Timeline() {
  const { id, events } = useContext(userContext);
  return (
    <>
      <div className="bg-BG2 my-12 border border-gray-500 pt-10 rounded-[17px]">
        <div className="flex justify-between">
          <h1 className="text-white font-bold text-5xl mb-6 ml-10 ">
            Our Activities
          </h1>
          {id && (
            <a
              href="/addnewevent"
              className="bg-ELECT rounded-xl text-center content-center mx-24 px-10 text-white font-medium "
            >
              Add
            </a>
          )}
        </div>
        <TimelineCore>
          {events.map((event) => (
            <EventCard
              title={event.title}
              subtitle={event.subtitle}
              description={event.description}
              img={event.img}
              date={event.date}
            />
          ))}
        </TimelineCore>
      </div>
    </>
  );
}
