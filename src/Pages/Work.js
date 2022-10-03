import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      className="scrollbar"
      style={{ overflowY: "scroll" }}
    >
      <h1 style={{ color: "blue" }}>what i've built</h1>
      <div className="content-wrap">
        <div style={{ marginTop: "6rem" }}>
          <div>
            <h2>
              my name is <span style={{ color: "red" }}>CJ </span>
              <span style={{ color: "blue" }}>Nour</span>.
            </h2>
          </div>
          <div className="socials"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
