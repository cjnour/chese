import React from "react";
import yt_logo from "../assets/youtube.png";
import gh_logo from "../assets/github.png";
import li_logo from "../assets/inlinked.png";
import welcome from "../assets/welcome.png";
import { motion } from "framer-motion";
import "../styles.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div style={{ marginTop: "6rem", marginBottom: "20rem" }}>
        <div>
          <img src={welcome} alt="welcome" style={{ width: "8rem" }} />
          <br />
          <br />
          <h2 className="description">
            my name is <span style={{ color: "red" }}>CJ </span>
            <span style={{ color: "blue" }}>Nour</span>.
          </h2>
          <h2 className="description">
            i'm an aspiring <span style={{ color: "#ab00d6" }}>engineer </span>{" "}
            with passions for <span style={{ color: "#009e00" }}>software</span>
            ,<span style={{ color: "orange" }}> hardware</span>, and{" "}
            <span style={{ color: "red" }}>learning</span>.
          </h2>
          <h2 className="description">
            i <span style={{ color: "red" }}>specialize</span> in delivering
            <span style={{ color: "blue" }}> high</span>-
            <span style={{ color: "#ab00d6" }}>tech </span>{" "}
            <span style={{ color: "#009e00" }}>solutions</span>.
          </h2>
        </div>
        <div className="socials">
          <div>
            <a
              href="https://www.youtube.com/channel/UC8al7q-s0BWKpeaW3Uvfh4Q"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yt_logo} alt="youtube" className="youtube" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/cjnour"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gh_logo} alt="github" className="github" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/cj-nour-3b82681a0/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={li_logo} alt="inlinked" className="inlinked" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
