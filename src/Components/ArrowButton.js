import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import "../styles.css";

const ArrowButton = () => {
  const [arrowScrollButton, setArrowScrollButton] = useState(true);

  const arrowShow = () => {
    setArrowScrollButton(false);
  };

  useEffect(() => {
    document.getElementById("contenter").addEventListener("scroll", () => {
      if (document.getElementById("contenter").scrollY < "100px") {
        setArrowScrollButton(true);
      } else setArrowScrollButton(false);
    });
  }, []);

  function scrollDown() {
    const element = document.getElementById("contenter");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      {arrowScrollButton && (
        <a>
          <img
            src={arrow}
            alt="arrow_down"
            style={{ width: "2.5rem" }}
            className="arrowfloat"
            onClick={() => {
              scrollDown();
              arrowShow();
            }}
          />
        </a>
      )}
    </div>
  );
};

export default ArrowButton;
