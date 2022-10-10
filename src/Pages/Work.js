import React from "react";
import { motion } from "framer-motion";
import pin from "../assets/pinterest.png";
// import logo from "../assets/logo.png";
import peetime from "../assets/peetime.png";
import curtain from "../assets/curtain.png";
import car from "../assets/auto_car.png";
import batmobile from "../assets/batmobile.png";
import "../styles.css";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div
        className="wrapper scrollbox_delayed"
        id="wrapper-work"
        style={{ marginBottom: "20rem" }}
      >
        <div className="main-content">
          <div>
            <h1
              className="header"
              style={{
                color: "#004ed4",
              }}
            >
              what i've created
            </h1>
          </div>
          <div className="container" key="peetime">
            <div style={{ position: "relative" }} className="text-stuff">
              <h2 className="description">
                i am inventing a <span style={{ color: "#004ed4" }}>cheap</span>
                , <span style={{ color: "#004ed4" }}>open-source</span> solution
                to{" "}
                <a
                  href="https://www.moneris.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: "#004ed4" }}>puppy potty-training</span>
                </a>
                .
              </h2>
              <h2 className="description">
                for this, i'm utilizing an{" "}
                <span style={{ color: "#004ed4" }}>ESP8266-12E</span> module
                coded in <span style={{ color: "#009298" }}>Arduino</span>.
              </h2>
              <h2 className="description">
                i'm using{" "}
                <span style={{ backgroundColor: "#F7DF1E" }}> JavaScript</span>{" "}
                and <span style={{ color: "#53c0db" }}>React Native</span>, as
                well as <span style={{ color: "#FF9900" }}>AWS</span>.
              </h2>
              <p>2022</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff" style={{ marginTop: "3.25rem" }}>
              <a href="/notyet">
                <img
                  src={peetime}
                  alt="moneris"
                  className="moneris"
                  style={{ marginTop: "-2.5rem" }}
                ></img>
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
              <h2 className="description">
                created a solution for my partner's sleep apnea, an{" "}
                <span style={{ color: "#004ed4" }}>
                  automated smart curtain
                </span>{" "}
                to block{" "}
                <span style={{ filter: "drop-shadow(0px 0px 8px #FFD32C)" }}>
                  sunlight
                </span>
                .
              </h2>
              <h2 className="description">
                developed an app via{" "}
                <span style={{ color: "#53c0db" }}>React Native</span>, backend
                hosted on <span style={{ color: "#FF9900" }}>AWS IoT</span>{" "}
                services.
              </h2>
              <h2 className="description">
                implemented <span style={{ color: "#009298" }}>Arduino</span>{" "}
                code design onto an{" "}
                <span style={{ color: "#004ed4" }}>ESP8266-12E </span>module to
                a stepper motor.
              </h2>
              <p>2022</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff" style={{ marginTop: "4rem" }}>
              <a href="/notyet">
                <img
                  src={curtain}
                  alt="smartcurtain"
                  className="moneris"
                  style={{ marginTop: "-3rem" }}
                ></img>
              </a>
            </div>
          </div>
          <div
            className="container"
            id="contenter"
            key="rccar"
            style={{ scrollMarginTop: "8.5rem" }}
          >
            <div style={{ position: "relative" }} className="text-stuff">
              <br />
              <h2 className="description">
                implemented{" "}
                <span style={{ color: "#004ed4" }}>
                  self-driving algorithms
                </span>{" "}
                on an RC car to navigate through obstacles.
              </h2>
              <h2 className="description">
                used <span style={{ color: "#004ed4" }}>LiDAR</span> data
                processed through a{" "}
                <span style={{ color: "#94CF43" }}>NVIDIA Jetson Nano</span>.
              </h2>
              <h2 className="description">
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
                href="https://youtu.be/vbRwVFSEvzs"
                target="_blank"
                rel="noreferrer"
              >
                <img src={car} alt="rc_car" className="autocar"></img>
              </a>
            </div>
          </div>
          <div className="container" key="rcbatmobile">
            <div style={{ position: "relative" }} className="text-stuff">
              <h2 className="description">
                designed and constructed an RC replica of the 1989{" "}
                <span style={{ backgroundColor: "#F7DF1E" }}> Batmobile</span>.
              </h2>
              <h2 className="description">
                challenges of chassis strength were encountered in the testing
                phases.
              </h2>
              <h2 className="description">
                obtained skills in <span style={{ color: "#004ed4" }}>CAD</span>
                , <span style={{ color: "#004ed4" }}>hardware</span>,{" "}
                <span style={{ color: "#004ed4" }}>electrical work</span>, and{" "}
                <span style={{ color: "#004ed4" }}>physics</span>.
              </h2>
              <p>2019</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff">
              <a href="/notyet">
                <img
                  src={batmobile}
                  alt="rc_batmobile"
                  className="batmobile"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#004ed4" }}>s'more work</h4>
            <a
              href="https://www.pinterest.com/cjnour"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pin} alt="pinterest" className="pin"></img>
            </a>
          </div>
          <div>
            <br />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
