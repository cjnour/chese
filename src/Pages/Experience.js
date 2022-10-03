import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className="content-wrap">
        <div style={{ marginTop: "6rem" }}>
          <div>
            {/* <p>welcome.</p> */}
            <br />
            <h2>
              my name is <span style={{ color: "red" }}>CJ </span>
              <span style={{ color: "blue" }}>Nour</span>.
            </h2>
            <h2>
              i'm an aspiring{" "}
              <span style={{ color: "rgb(204, 0, 255)" }}>engineer </span> with
              passions for{" "}
              <span style={{ color: "rgb(0, 202, 0)" }}>software</span>,
              <span style={{ color: "orange" }}> hardware</span>, and{" "}
              <span style={{ color: "red" }}>learning</span>.
            </h2>
            <h2>
              i <span style={{ color: "red" }}>specialize</span> in delivering
              <span style={{ color: "blue" }}> high</span>-
              <span style={{ color: "rgb(204, 0, 255)" }}>tech </span>{" "}
              <span style={{ color: "rgb(0, 202, 0)" }}>solutions</span>.
            </h2>
          </div>
          <div className="socials"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
