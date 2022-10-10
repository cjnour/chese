import React from "react";
import { motion } from "framer-motion";
import moneris from "../assets/moneris.png";
import com from "../assets/com.png";
import tcp from "../assets/tcp.png";
import ArrowButton from "../Components/ArrowButton";
import "../styles.css";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div
        className="wrapper scrollbox_delayed"
        id="wrapper-exp"
        style={{ marginBottom: "20rem" }}
      >
        <div className="main-content">
          <div>
            <h1
              className="header"
              style={{
                color: "rgb(204, 0, 255)",
              }}
            >
              what i'm doing
            </h1>
          </div>
          <div className="container" key="moneris">
            <div style={{ position: "relative" }} className="text-stuff">
              <br />
              <h2 className="description">
                i am currently working at{" "}
                <a
                  href="https://www.moneris.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: "#00B7C9" }}>Moneris</span>
                </a>
                .
              </h2>
              <h2 className="description">
                here, i'm using languages like{" "}
                <span style={{ backgroundColor: "#F7DF1E" }}> JavaScript</span>{" "}
                and
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
              <h2 className="description">
                i've also been using frameworks like{" "}
                <span style={{ color: "#53c0db" }}>React</span>,{" "}
                <span style={{ color: "#764ABC" }}>Redux</span>, and{" "}
                <span style={{ color: "#007BF7" }}>Material-UI</span>.
              </h2>
              <p>2022-present</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff" style={{ marginTop: "3.25rem" }}>
              <a
                href="https://www.moneris.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={moneris} alt="moneris" className="moneris"></img>
              </a>
            </div>
          </div>
          <ArrowButton />
          <div
            style={{
              margin: "0 auto",
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            <h1
              className="header"
              style={{
                color: "rgb(204, 0, 255)",
                padding: "0rem",
                float: "left",
                marginTop: "10rem",
              }}
            >
              where i've been
            </h1>
          </div>
          <div
            className="container"
            id="contenter"
            key="city"
            style={{ marginTop: "3rem", scrollMarginTop: "8.5rem" }}
          >
            <div style={{ position: "relative" }} className="text-stuff">
              <br />
              <h2 className="description">
                i used to work for{" "}
                <a
                  href="https://www.mississauga.ca"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: "#0077B6" }}>
                    The City of Mississauga
                  </span>
                </a>
                .
              </h2>
              <h2 className="description">
                there, i worked two positions,{" "}
                <span style={{ backgroundColor: "#EE6930", color: "#bddd46" }}>
                  {" "}
                  Parks Operations
                </span>{" "}
                and{" "}
                <span style={{ backgroundColor: "#223A73", color: "white" }}>
                  Facility Operations
                </span>
                .
              </h2>
              <h2 className="description">
                i learned the value of{" "}
                <span style={{ color: "rgb(204, 0, 255)" }}>independence</span>,
                <span style={{ color: "rgb(204, 0, 255)" }}> respect</span>, and
                obtained skills of{" "}
                <span style={{ color: "rgb(204, 0, 255)" }}>labour work</span>.
              </h2>
              <p>2021-2022</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff" style={{ marginTop: "4rem" }}>
              <a
                href="https://www.mississauga.ca"
                target="_blank"
                rel="noreferrer"
              >
                <img src={com} alt="CoM" className="moneris"></img>
              </a>
            </div>
          </div>
          <div className="container" key="tcp" style={{ marginTop: "-3rem" }}>
            <div style={{ position: "relative" }} className="text-stuff">
              <br />
              <h2 className="description">
                i first worked at{" "}
                <a
                  href="https://www.thecoldpressery.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: "#CFB12A" }}>The Cold Pressery</span>
                </a>
                .
              </h2>
              <h2 className="description">
                there, i worked as a
                <span style={{ color: "rgb(204, 0, 255)" }}> barista</span> and
                a <span style={{ color: "rgb(204, 0, 255)" }}> cook</span>.
              </h2>
              <h2 className="description">
                i had some really interesting customer experiences there.
              </h2>
              <p>2017-2020</p>
            </div>
            <div style={{ margin: "3%" }}></div>
            <div className="pic-stuff">
              <a
                href="https://www.thecoldpressery.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={tcp} alt="tcp" className="moneris"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
