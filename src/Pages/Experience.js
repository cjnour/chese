import React from "react";
import { motion } from "framer-motion";
import moneris from "../assets/moneris.png";
import "../styles.css";

const Experience = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      className="scrollbar"
      style={{ overflowY: "scroll" }}
    >
      <h1 style={{ color: "rgb(204, 0, 255)" }}>what i'm doing</h1>
      <div className="container">
        <div style={{ position: "relative" }} className="text-stuff">
          <br />
          <h2>
            i am currently working at{" "}
            <a
              href="https://www.moneris.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#00B7C9" }}>Moneris</span>
            </a>
            .
          </h2>
          <h2>
            here, i'm using languages like{" "}
            <span style={{ backgroundColor: "#F7DF1E" }}> JavaScript</span> and
            <span style={{ color: "#E54C21" }}> HTML</span>/
            <span style={{ color: "#264DE4" }}>CSS</span> to develop
            <span className="beautiful">
              <span style={{ color: "red" }}> b</span>
              <span style={{ color: "blue" }}>e</span>
              <span style={{ color: "#F7DF1E" }}>a</span>
              <span style={{ color: "rgb(0, 202, 0)" }}>u</span>
              <span style={{ color: "rgb(204, 0, 255)" }}>t</span>
              <span style={{ color: "red" }}>i</span>
              <span style={{ color: "blue" }}>f</span>
              <span style={{ color: "#F7DF1E" }}>u</span>
              <span style={{ color: "rgb(0, 202, 0)" }}>l </span>
            </span>
            applications.
          </h2>
          <h2>
            i've also been using frameworks like{" "}
            <span style={{ color: "#53c0db" }}>React</span>,{" "}
            <span style={{ color: "#764ABC" }}>Redux</span>, and{" "}
            <span style={{ color: "#007BF7" }}>Material-UI</span>.
          </h2>
          <div className="socials"></div>
        </div>
        <div style={{ margin: "3%" }}></div>
        <div className="pic-stuff" style={{ marginTop: "1.75rem" }}>
          <a href="https://www.moneris.com/" target="_blank">
            <img src={moneris} alt="moneris" className="moneris"></img>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
