import React from "react";
import { motion } from "framer-motion";
import batmobile from "../assets/batmobile.png";
import logo from "../assets/logo.png";

import "../styles.css";

const Work = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className="wrapper scrollbox_delayed" id="wrapper-work">
        <div className="main-content">
          <div>
            <h1
              style={{
                color: "blue",
                filter: "drop-shadow(0px 6px 6px #b3b3b3)",
              }}
            >
              what i've created
            </h1>
          </div>
          <div className="container" key="peetime">
            <div style={{ position: "relative" }} className="text-stuff">
              <h2>
                i am inventing a <span style={{ color: "blue" }}>cheap</span>,{" "}
                <span style={{ color: "blue" }}>open-source</span> solution to{" "}
                <a
                  href="https://www.moneris.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: "blue" }}>puppy potty-training</span>
                </a>
                .
              </h2>
              <h2>
                for this, i'm utilizing an{" "}
                <span style={{ color: "blue" }}>ESP8266-12E</span> module coded
                in <span style={{ color: "#009298" }}>Arduino</span>.
              </h2>
              <h2>
                i'm using{" "}
                <span style={{ backgroundColor: "#F7DF1E" }}> JavaScript</span>{" "}
                and <span style={{ color: "#53c0db" }}>React Native</span>, as
                well as <span style={{ color: "#FF9900" }}>AWS</span>.
              </h2>
              <p>2022</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff" style={{ marginTop: "3.25rem" }}>
              <a
                href="https://www.moneris.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo} alt="moneris" className="moneris"></img>
              </a>
            </div>
          </div>
          <div
            className="container"
            id="contenter"
            key="smartcurtain"
            style={{ marginTop: "3rem", scrollMarginTop: "8.5rem" }}
          >
            <div style={{ position: "relative" }} className="text-stuff">
              <h2>
                created a solution for my partner's sleep apnea, an{" "}
                <span style={{ color: "blue" }}>automated smart curtain</span>{" "}
                to block{" "}
                <span style={{ filter: "drop-shadow(0px 0px 8px #FFD32C)" }}>
                  sunlight
                </span>
                .
              </h2>
              <h2>
                developed an app via{" "}
                <span style={{ color: "#53c0db" }}>React Native</span>, backend
                hosted on <span style={{ color: "#FF9900" }}>AWS IoT</span>{" "}
                services.
              </h2>
              <h2>
                implemented <span style={{ color: "#009298" }}>Arduino</span>{" "}
                code design onto an{" "}
                <span style={{ color: "blue" }}>ESP8266-12E </span>module to a
                stepper motor.
              </h2>
              <p>2022</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff" style={{ marginTop: "4rem" }}>
              <a
                href="https://www.mississauga.ca"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo} alt="smartcurtain" className="moneris"></img>
              </a>
            </div>
          </div>
          <div
            className="container"
            id="contenter"
            key="rccar"
            style={{ marginTop: "3rem", scrollMarginTop: "8.5rem" }}
          >
            <div style={{ position: "relative" }} className="text-stuff">
              <br />
              <h2>
                implemented{" "}
                <span style={{ color: "blue" }}>self-driving algorithms</span>{" "}
                on an RC car to navigate through obstacles.
              </h2>
              <h2>
                used <span style={{ color: "blue" }}>LiDAR</span> data processed
                through a{" "}
                <span style={{ color: "#94CF43" }}>NVIDIA Jetson Nano</span>.
              </h2>
              <h2>
                coded in <span style={{ color: "#00589D" }}>C</span> and{" "}
                <span style={{ backgroundColor: "#FFE05E", color: "#3975A5" }}>
                  {" "}
                  Python
                </span>
                , running on{" "}
                <span style={{ color: "#DE4815" }}>Linux Ubuntu.</span>
              </h2>
              <p>2022</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff" style={{ marginTop: "4rem" }}>
              <a
                href="https://www.mississauga.ca"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo} alt="rc_car" className="moneris"></img>
              </a>
            </div>
          </div>
          <div
            className="container"
            key="rcbatmobile"
            style={{ marginTop: "-3rem" }}
          >
            <div style={{ position: "relative" }} className="text-stuff">
              <h2>
                designed and constructed an RC replica of the 1989{" "}
                <span style={{ backgroundColor: "#F7DF1E" }}> Batmobile</span>.
              </h2>
              <h2>
                challenges of chassis strength were encountered in the testing
                phases.
              </h2>
              <h2>
                obtained skills in <span style={{ color: "blue" }}>CAD</span>,{" "}
                <span style={{ color: "blue" }}>hardware</span>,{" "}
                <span style={{ color: "blue" }}>electrical work</span>, and{" "}
                <span style={{ color: "blue" }}>physics</span>.
              </h2>
              <p>2019</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff">
              <a
                href="https://www.thecoldpressery.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={batmobile}
                  alt="rc_batmobile"
                  className="batmobile"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
