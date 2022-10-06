import React from "react";
import { motion } from "framer-motion";
// import me from "../assets/me.jpg";
// import notme from "../assets/notme.jpg";
import gus from "../assets/gus.png";
import inlinked from "../assets/inlinked.png";
import gmail from "../assets/gmail.png";
import mail from "../assets/mail.png";
import "../styles.css";

const Contact = () => {
  const copier = () => {
    navigator.clipboard
      .writeText("txt to wrt")
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

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
        <div className="text-stuff">
          <br />
          <h2>
            whether it's a question, a comment, or you just want to say hi
          </h2>
          <h2>
            i'm <span style={{ color: "red" }}>open</span> to chat any{" "}
            <span style={{ color: "blue" }}>day</span>, any
            <span style={{ color: "green" }}> time</span>.
          </h2>
          <div style={{ marginTop: "5rem" }}>
            <a
              href="https://mail.google.com/mail/u/?tab=rm&ogbl#inbox?compose=new"
              onClick={copier}
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "2rem" }}
            >
              <img src={gmail} alt="gmail_logo" className="github" />
            </a>
            <a
              href="mailto:charbel.nour9@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "2rem" }}
            >
              <img src={mail} alt="mail_icon" className="mail" />
            </a>
            <a
              href="https://www.linkedin.com/in/cj-nour-3b82681a0/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={inlinked} alt="linkedin_logo" className="inlinked" />
            </a>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div style={{ margin: "3%" }}></div>
        <div className="pic-stuff">
          <img src={gus} alt="notme" width="300" />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
