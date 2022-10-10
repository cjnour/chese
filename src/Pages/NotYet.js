import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="description">
          <span style={{ color: "red" }}>work </span>
          <span style={{ color: "blue" }}>in </span>
          <span style={{ color: "rgb(0, 202, 0)" }}>progress</span>.
        </h2>
        <br />
        <br />
        <br />
        <h2>
          <a href="/work">{"<--"}back</a>
        </h2>
      </div>
    </motion.div>
  );
};

export default Home;
