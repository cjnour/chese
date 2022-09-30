import React from "react";
import mouse_chese from "../assets/mouse_chese.gif";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={mouse_chese} alt="loading..." />
    </div>
  );
};

export default Loading;
