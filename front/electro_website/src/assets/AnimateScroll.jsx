import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AnimateScroll({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
  });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="overflow-hidden relative w-fit ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-0  bottom-4 left-0 right-0 bg-slate-600  shadow-lg z-20"
      ></motion.div> */}
    </div>
  );
}
