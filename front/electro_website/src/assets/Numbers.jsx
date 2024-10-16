import { useState } from "react";

export default function Numbers() {
  const [projects, setProjects] = useState(113);
  const [events, setEvents] = useState(84);
  const [workshops, setWorkshops] = useState(32);
  const [members, setMembers] = useState(354);
  return (
    <div className="flex  justify-around m-10">
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          {projects}
        </span>
        <span className="text-gray-300 text-center ">Projects</span>
      </div>
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          {events}
        </span>{" "}
        <span className="text-gray-300 text-center ">Events</span>
      </div>
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          {workshops}
        </span>{" "}
        <span className="text-gray-300 text-center ">Workshops</span>
      </div>
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          {members}
        </span>{" "}
        <span className="text-gray-300 text-center ">Members</span>
      </div>
    </div>
  );
}
