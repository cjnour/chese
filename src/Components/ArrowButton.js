import React from "react";
import arrow from "../assets/arrow.png";
import "../styles.css";

const ArrowButton = () => {
  function scrollDown() {
    const element = document.getElementById("contenter");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      <img
        src={arrow}
        alt="arrow_down"
        style={{ width: "3.5rem", marginTop: "-2rem" }}
        className="arrowfloat"
        onClick={() => {
          scrollDown();
        }}
      />
    </div>
  );
};

export default ArrowButton;
