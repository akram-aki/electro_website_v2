import Counter from "./Counter";

export default function Numbers() {
  const projects = 113;
  const events = 84;
  const workshops = 32;
  const members = 354;
  return (
    <div className="flex  justify-around m-10">
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          <Counter classname="text-white" from={0} to={projects} duration={2} />
        </span>
        <span className="text-gray-300 text-center ">Projects</span>
      </div>
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          <Counter classname="text-white" from={0} to={events} duration={2} />
        </span>{" "}
        <span className="text-gray-300 text-center ">Events</span>
      </div>
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          <Counter
            classname="text-white"
            from={0}
            to={workshops}
            duration={2}
          />
        </span>{" "}
        <span className="text-gray-300 text-center ">Workshops</span>
      </div>
      <div className="grid">
        <span className="text-white text-center text-xl font-bold">
          <Counter classname="text-white" from={0} to={members} duration={2} />
        </span>{" "}
        <span className="text-gray-300 text-center ">Members</span>
      </div>
    </div>
  );
}
