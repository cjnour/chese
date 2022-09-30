import React, { useEffect, useState } from "react";
import mouse_chese from "../assets/mouse_chese.gif";

const Loading = () => {
  const [redShow, setRedShow] = useState(false);
  const [blueShow, setBlueShow] = useState(false);
  const [greenShow, setGreenShow] = useState(false);

  useEffect(async () => {
    let timer1 = setTimeout(() => {
      setRedShow(true);
    }, 300);
    let timer2 = setTimeout(() => {
      setBlueShow(true);
    }, 600);

    let timer3 = setTimeout(() => {
      setGreenShow(true);
    }, 900);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={mouse_chese} alt="loading..." style={{ width: "7.3rem" }} />
      {redShow && (
        <div
          style={{ marginTop: "3.2rem", marginLeft: "0.1rem", color: "red" }}
        >
          <h2>.</h2>
        </div>
      )}
      {blueShow && (
        <div
          style={{
            marginTop: "3.2rem",
            marginLeft: "0.1rem",
            color: "#2478ff",
          }}
        >
          <h2>.</h2>
        </div>
      )}
      {greenShow && (
        <div
          style={{
            marginTop: "3.2rem",
            marginLeft: "0.1rem",
            color: "#00c220",
          }}
        >
          <h2>.</h2>
        </div>
      )}
    </div>
  );
};

export default Loading;
