import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import "../styles.css";

const ArrowButton = () => {
  const [arrowScrollButton, setArrowScrollButton] = useState(true);

  const arrowShow = () => {
    setArrowScrollButton(false);
  };

  function scrollDown() {
    const element = document.getElementById("contenter");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      {arrowScrollButton && (
        <img
          src={arrow}
          alt="arrow_down"
          style={{ width: "3.5rem", marginTop: "-2rem" }}
          className="arrowfloat"
          onClick={() => {
            scrollDown();
            //   arrowShow();
          }}
        />
      )}
    </div>
  );
};

export default ArrowButton;
