import { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteEvent() {
  const [searchedEvent, setSearchedEvent] = useState("");
  const [e, setE] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      axios
        .get("/searchEvents", {
          params: {
            search: searchedEvent,
          },
        })
        .then((res) => {
          setE(res.data);
        });
    };
    fetchData();
  }, [searchedEvent]);

  function handleDelete(title) {
    const del = confirm("are you sure you want to delete this event?");
    if (del) {
      axios
        .delete("/deleteEvent", {
          data: {
            title: title,
          },
        })
        .then(() => alert("deletion successful"))
        .catch(() => alert("failed to delete event, try again later"));
    }
  }
  return (
    <div className="bg-NAV w-screen lg:m-24 sm:m-8 p-10">
      <div className="grid gap-4">
        <h1 className="text-3xl font-sora text-white ">Delete Event</h1>
        <input
          onChange={(e) => setSearchedEvent(e.target.value)}
          className="w-full shadow-lg rounded-xl p-4"
        />
        <div
          className={`bg-BG rounded-lg w-full py-5 grid gap-3 ${
            e.length === 0 ? "hidden" : "non-empty-state-class"
          }`}
        >
          {e &&
            e.map((event) => (
              <div
                className="flex hover:bg-NAV gap-2  w-full p-2"
                key={event.title}
              >
                <RiDeleteBin6Line className="text-white text-2xl size-5 " />
                <button
                  className="text-start text-white"
                  onClick={() => {
                    handleDelete(event.title);
                  }}
                >
                  {event.title}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
