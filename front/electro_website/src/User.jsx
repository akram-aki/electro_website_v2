import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export const userContext = createContext({});

export function User({ children }) {
  const [currUser, setCurrUser] = useState("");
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
  }, []);
  return (
    <userContext.Provider value={{ currUser, id }}>
      {children}
    </userContext.Provider>
  );
}
