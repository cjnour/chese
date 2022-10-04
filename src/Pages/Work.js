import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles.css";

const Work = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div>
        <h1 style={{ color: "blue" }}>what i've built</h1>
      </div>
      <div className="wrapper scrollbox_delayed" id="wrapper-work">
        <div className="main-content">
          <h2>
            my name is <span style={{ color: "red" }}>CJ </span>
            <span style={{ color: "blue" }}>Nour</span>.
          </h2>
        </div>
        <div className="empty-panel"></div>
      </div>
    </motion.div>
  );
};

export default Work;
