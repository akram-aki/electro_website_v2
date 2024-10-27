import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export const userContext = createContext({});

export function User({ children }) {
  const [currUser, setCurrUser] = useState("");
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    if (!currUser) {
      const cookie = Cookies.get("token");
      axios
        .get("/getUser", {
          params: {
            cookie: cookie,
          },
        })
        .then((response) => {
          setCurrUser(response.data.userName);
          setId(response.data.id);
        });
    }
    if (events.length === 0) {
      axios.get("/fetchEvents").then((response) => {
        setEvents(() => {
          const set = new Set();
          const newItems = response.data.filter((item) => {
            if (set.has(item.id)) {
              return false;
            }
            set.add(item.id);
            return true;
          });
          return newItems;
        });
      });
    }
    if (projects.length === 0) {
      axios.get("/fetchProject").then((response) => {
        setProjects(() => {
          const set = new Set();
          const newItems = response.data.filter((item) => {
            if (set.has(item.id)) {
              return false;
            }
            set.add(item.id);
            return true;
          });
          return newItems;
        });
      });
    }
  }, []);

  return (
    <userContext.Provider value={{ currUser, id, events, projects }}>
      {children}
    </userContext.Provider>
  );
}
