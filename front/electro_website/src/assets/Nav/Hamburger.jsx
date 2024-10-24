import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";
const variants = {
  Open: {
    height: "100vh",
    width: "100vw",
    borderRadius: "0px",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  Closed: {
    height: "80px",
    width: "80px",

    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};
export default function Hamburger() {
  const [active, setActive] = useState(false);

  return (
    <div className=" absolute right-0 z-40 overflow-hidden">
      <motion.div
        variants={variants}
        animate={active ? "Open" : "Closed"}
        initial="Closed"
        className="relative  bg-ELECT border-2"
      >
        <motion.button
          onClick={() => setActive(!active)}
          className="absolute top-0 right-0  h-20 w-20 rounded-full bg-white/0 transition-colors "
          animate={active ? "open" : "closed"}
        >
          <motion.span
            style={{
              left: "50%",
              top: "35%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-1 w-10 bg-white"
            variants={{
              open: { rotate: ["0deg", "0deg", "45deg"], top: "50%" },
              closed: { rotate: "0deg" },
            }}
          />
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-1 w-10 bg-white"
            variants={{
              open: { rotate: ["0deg", "0deg", "-45deg"] },
              closed: { rotate: 0 },
            }}
          />
          <motion.span
            style={{
              left: "calc(50%+10px)",
              bottom: "30%",
              x: "-50%",
              y: "50%",
            }}
            className="absolute h-1 w-5 bg-white"
            variants={{
              open: {
                left: "50%",
                bottom: "50%",
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: { left: "calc(50%+10px)", rotate: 0 },
            }}
          />
        </motion.button>
        <AnimatePresence>
          <Nav state={active} />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
