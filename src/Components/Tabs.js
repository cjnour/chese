import React from "react";
import "../styles.css";

const Tabs = () => {
  return (
    <div className="wrapper">
      <h4
        className="home"
        onClick={() => {
          console.log("home");
        }}
      >
        home
      </h4>
      <h4
        className="work"
        onClick={() => {
          console.log("work");
        }}
      >
        work
      </h4>
      <h4
        className="exp"
        onClick={() => {
          console.log("exp");
        }}
      >
        experience
      </h4>
      <h4
        className="con"
        onClick={() => {
          console.log("con");
        }}
      >
        contact
      </h4>
    </div>
  );
};

export default Tabs;
