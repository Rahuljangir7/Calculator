import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Box = ({ visibility, durationTime, tag, initialVal }) => {
  const ref = useRef(null);

  // Hook to detect if the element is in view
  const isInView = useInView(ref, { threshold: { visibility } }); // Trigger when 50% visible

  const transitionVal = {
    duration: durationTime,
    ease: "linear",
  };

  return (
    <motion.div
      ref={ref}
      initial={initialVal} // Start outside the viewport (left side)
      animate={isInView ? { x: 0, opacity: 1 } : initialVal} // Animate to position
      transition={transitionVal}
    >
      {tag}
    </motion.div>
  );
};

export default Box;
