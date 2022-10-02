import React from "react";
import yt_logo from "../assets/youtube.png";
import gh_logo from "../assets/github.png";
import li_logo from "../assets/inlinked.png";
import "../styles.css";

const Home = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div>
        <p>welcome.</p>
        <h2>
          my name is <span style={{ color: "red" }}>CJ </span>
          <span style={{ color: "blue" }}>Nour</span>.
        </h2>
        <h2>
          i'm an aspiring{" "}
          <span style={{ color: "rgb(204, 0, 255)" }}>engineer </span> with
          passions for <span style={{ color: "rgb(0, 202, 0)" }}>software</span>
          ,<span style={{ color: "orange" }}> hardware</span>, and{" "}
          <span style={{ color: "red" }}>learning</span>.
        </h2>
        <h2>
          i <span style={{ color: "red" }}>specialize</span> in delivering
          <span style={{ color: "blue" }}> high</span>-
          <span style={{ color: "rgb(204, 0, 255)" }}>tech </span>{" "}
          <span style={{ color: "rgb(0, 202, 0)" }}>solutions</span>.
        </h2>
      </div>
      <div className="socials">
        <div>
          <a href="https://github.com/cjnour">
            <img src={gh_logo} alt="github" className="github" />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UC8al7q-s0BWKpeaW3Uvfh4Q">
            <img src={yt_logo} alt="youtube" className="youtube" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/cj-nour-3b82681a0/">
            <img src={li_logo} alt="inlinked" className="inlinked" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
