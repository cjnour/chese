import React, { useState } from "react";
import mouse_walk from "../assets/mouse_walk.gif";
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
    }, 3000);
    return () => {
      clearTimeout(timer1);
    };
  };
  return (
    <div>
      {mouseMove ? (
        <div className="moveArrow">
          <img
            src={mouse_walk}
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
              left: `${xPos + 50}px`,
              bottom: "0rem",
              width: "2rem",
              height: "4.5rem",
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
