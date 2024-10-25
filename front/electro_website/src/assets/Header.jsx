import elect_logo from "./elect_logo.png";
import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { motion, useAnimation } from "framer-motion";
import { userContext } from "../User";
import NavElements from "./NavElements";
import Hamburger from "./Nav/Hamburger";

export default function Header() {
  const [seen, setSeen] = useState(false);
  const { currUser, id } = useContext(userContext);
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, []);
  function togglePop() {
    setSeen(!seen);
  }

  return (
    <nav className="bg-NAV relative text-[#b6b6b6] flex justify-between px-10   h-20 py-4 items-center">
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
          <div className="text-white sm:absolute lg:static   sm:left-1/2 sm:top-3 bg-ELECT p-3 rounded-2xl w-auto text-center font-semibold text-lg">
            <a href="/dashboard">Dashboard</a>
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
      <div className="absolute top-0 right-0 lg:hidden sm:inline-block">
        <Hamburger />
      </div>
    </nav>
  );
}
