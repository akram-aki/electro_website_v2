import elect_logo from "./elect_logo.png";
import { useState } from "react";
import Login from "./Login";
export default function Header() {
  const [seen, setSeen] = useState(false);
  function togglePop() {
    setSeen(!seen);
  }

  return (
    <nav className="bg-NAV text-white     flex  justify-between px-10   py-4 items-center">
      <a href="/" className="flex items-center gap-2">
        <img src={elect_logo} className="size-10" alt="logo" />
        <span className="text-3xl font-bold">Electro club</span>
      </a>
      <div className="grid grid-cols-4 gap-32">
        <a href="" className="hover:text-ELECT">
          ABOUT US
        </a>
        <a href="" className="hover:text-ELECT">
          ACTIVITIES
        </a>
        <a href="" className="hover:text-ELECT">
          DISCORD
        </a>
        <a href="" className="hover:text-ELECT">
          CONTACT
        </a>
      </div>
      <div>
        <button
          onClick={togglePop}
          className=" shadow-2xl rounded-2xl p-3 bg-ELECT text-white"
        >
          Login
        </button>
        {seen ? <Login toggle={togglePop} /> : null}
      </div>
    </nav>
  );
}
