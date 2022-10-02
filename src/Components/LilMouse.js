import React, { useState } from "react";
import mouse_running_fast from "../assets/mouse_running_180.gif";
import mouse_stare from "../assets/STARING_MOUSE.png";
import "../styles.css";

const LilMouse = () => {
  const [ref, setRef] = useState(null);
  const [mouseMove, setMouseMove] = useState(true);
  const [xPos, setXPos] = useState(0);
  const onButtonClick = () => {
    setXPos(ref.getBoundingClientRect().x);
    setMouseMove(false);
    let timer1 = setTimeout(() => {
      setMouseMove(true);
    }, 5000);
    return () => {
      clearTimeout(timer1);
    };
  };
  return (
    <div>
      {mouseMove ? (
        <div className="moveArrow">
          <img
            src={mouse_running_fast}
            alt="catch me if you can"
            style={{ width: "7.3rem" }}
            id="mouse"
            ref={(ref) => {
              if (!ref) return;
              return setRef(ref);
            }}
            onClick={onButtonClick}
          />
        </div>
      ) : (
        <div>
          <img
            style={{
              position: "fixed",
              left: `${xPos}px`,
              top: "50px",
            }}
            src={mouse_stare}
            alt="AY IM WALKIN HERE"
          />
        </div>
      )}
    </div>
  );
};

export default LilMouse;
