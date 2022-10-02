import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      Experience
    </motion.div>
  );
};

export default Experience;
