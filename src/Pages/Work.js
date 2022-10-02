import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      Work
    </motion.div>
  );
};

export default Work;
