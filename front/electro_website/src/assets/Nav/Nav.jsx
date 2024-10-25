import { footerLinks, navElements } from "./data";
import { delay, motion } from "framer-motion";
import "./Nav.css";
const variants = {
  open: (i) => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  closed: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  exit: {
    opacity: 0,
  },
};
const footerVariant = {
  open: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  closed: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};
export default function Nav({ state, setState }) {
  const handleScroll = async (event, targetId, setState) => {
    event.preventDefault();
    await new Promise((resolve) => {
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      setTimeout(resolve, 2000);
    });
    setState(!state);
  };
  return (
    <nav className="grid gap-24">
      <div className="flex flex-col  items-start mt-24 ml-16 gap-5">
        {navElements.map((Element, i) => (
          <div
            key={i}
            style={{
              perspective: "120px",
              perspectiveOrigin: "bottom ",
            }}
          >
            <motion.div
              variants={variants}
              initial="closed"
              animate={state ? "open" : "closed"}
              exit="exit"
              transition={{ type: "tween" }}
              custom={i}
            >
              <a
                href={"#" + Element.href}
                onClick={(e) => handleScroll(e, Element.href, setState)}
                className="text-3xl text-black"
              >
                {Element.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex gap-10 ml-16  ">
        {footerLinks.map((Element, index) => (
          <div key={index}>
            <motion.a
              variants={footerVariant}
              initial="closed"
              animate={state ? "open" : "closed"}
              exit="exit"
              transition={{ type: "tween" }}
              custom={index}
              href={Element.href}
              className="w-1/2 text-black "
            >
              {Element.title}
            </motion.a>
          </div>
        ))}
      </div>
    </nav>
  );
}
