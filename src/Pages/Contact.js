import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.jpg";
// import notme from "../assets/notme.jpg";
// import gus from "../assets/gus.png";
import inlinked from "../assets/inlinked.png";
import gmail from "../assets/gmail.png";
import mail from "../assets/mail.png";
import "../styles.css";

const Contact = () => {
  function updateClipboard() {
    navigator.clipboard.writeText("poop").then(
      () => {
        alert("success");
      },
      () => {
        alert("failed");
      }
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      style={{ marginBottom: "20rem" }}
    >
      <h1 className="header">
        <span style={{ color: "#800244" }}>wine </span>and
        <span style={{ color: "#F7AA3E" }}> chese</span>?
      </h1>
      <div className="container">
        <div className="text-stuff">
          <br />
          <h2 className="description">
            whether it's a question, a comment, or you just want to say hi
          </h2>
          <h2 className="description">
            i'm <span style={{ color: "red" }}>open</span> to chat any{" "}
            <span style={{ color: "blue" }}>day</span>, any
            <span style={{ color: "green" }}> time</span>.
          </h2>
          <div className="contact-socials">
            {/* <a
              href="https://mail.google.com/mail/u/?tab=rm&ogbl#inbox?compose=new"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "2rem" }}
            >
              <img src={gmail} alt="gmail_logo" className="gmail" />
            </a> */}
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
              <img
                src={inlinked}
                alt="linkedin_logo"
                className="inlinked-contact"
              />
            </a>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div style={{ margin: "3%" }}></div>
        <div className="pic-stuff">
          <img src={me} alt="notme" className="picofme" />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
