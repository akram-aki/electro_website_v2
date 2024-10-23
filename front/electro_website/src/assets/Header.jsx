import elect_logo from "./elect_logo.png";
import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { motion, useAnimation } from "framer-motion";
import { userContext } from "../User";
import NavElements from "./NavElements";

export default function Header() {
  const [seen, setSeen] = useState(false);
  const [hamburgOpen, setHamburgOpen] = useState(false);
  const { currUser } = useContext(userContext);
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, []);
  function togglePop() {
    setSeen(!seen);
  }

  return (
    <nav className="bg-NAV text-[#b6b6b6] flex justify-between px-10   py-4 items-center">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <a href="/" className="flex items-center gap-2">
          <img src={elect_logo} className="size-10" alt="logo" />
          <span className="text-3xl font-sora font-extrabold text-white">
            Electro club
          </span>
        </a>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="lg:grid sm:hidden lg:grid-cols-4 gap-32 font-sora">
          <NavElements />
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {currUser ? (
          <div className="cursor-default sm:hidden bg-ELECT p-3 rounded-2xl w-20 text-center font-semibold text-lg">
            <span>{currUser}</span>
          </div>
        ) : (
          <div className="sm:hidden lg:flex">
            <button
              onClick={togglePop}
              className=" shadow-2xl rounded-2xl p-3 bg-ELECT text-white"
            >
              Login
            </button>
            {seen ? <Login toggle={togglePop} /> : null}
          </div>
        )}
      </motion.div>
      <button
        className="lg:hidden sm:flex"
        onClick={(e) => {
          e.preventDefault();
          setHamburgOpen(!hamburgOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {hamburgOpen && (
        <div className="grid duration-100 ease-in-out transition-all gap-4">
          <NavElements />
        </div>
      )}
    </nav>
  );
}
