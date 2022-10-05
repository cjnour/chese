import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.jpg";
import "../styles.css";

const Contact = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <h1>
        <span style={{ color: "#800244" }}>wine </span>and
        <span style={{ color: "#F7AA3E" }}> chese</span>?
      </h1>
      <div className="container">
        <div style={{ position: "relative" }} className="text-stuff">
          <br />
          <h2>
            whether it's a question, a comment, or you just want to say hi
          </h2>
          <h2>
            i'm <span style={{ color: "red" }}>open</span> to chat any{" "}
            <span style={{ color: "blue" }}>day</span>, any
            <span style={{ color: "green" }}> time</span>.
          </h2>
          <div style={{ textAlign: "left" }}>
            <a
              href="https://mail.google.com/mail/u/?tab=rm&ogbl#inbox?compose=new"
              target="_blank"
              rel="noreferrer"
            >
              email
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/cj-nour-3b82681a0/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div style={{ margin: "3%" }}></div>
        <div className="pic-stuff">
          <img src={me} alt="me" width="300" />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
