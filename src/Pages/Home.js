import React, { useRef } from "react";

const Home = () => {
  return (
    <div>
      <h4>welcome.</h4>
      <h2>
        my name is <span style={{ color: "red" }}>CJ </span>
        <span style={{ color: "blue" }}>Nour</span>.
      </h2>
      <h2>
        i'm an aspiring{" "}
        <span style={{ color: "rgb(204, 0, 255)" }}>engineer </span> with
        passions for <span style={{ color: "rgb(0, 202, 0)" }}>software</span>,
        <span style={{ color: "orange" }}> hardware</span>, and{" "}
        <span style={{ color: "red" }}>software</span>.
      </h2>
      <h2>
        i <span style={{ color: "red" }}>specialize</span> in delivering
        <span style={{ color: "blue" }}> high</span>-
        <span style={{ color: "rgb(204, 0, 255)" }}>tech </span>{" "}
        <span style={{ color: "rgb(0, 202, 0)" }}>solutions</span>.
      </h2>
    </div>
  );
};

export default Home;
