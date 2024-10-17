import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Counter = ({ from, to, duration }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({
        count: to,
        transition: { duration: duration, ease: "easeInOut" },
      });
    }
  }, [isInView, controls, from]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ count: from }}
      transition={{ duration: 1 }}
      onUpdate={(latest) => setCount(latest.count.toFixed(0))}
      className="text-white"
    >
      {count}
    </motion.div>
  );
};

export default Counter;
