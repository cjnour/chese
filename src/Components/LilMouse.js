import React, { useState, useEffect } from "react";
import mouse_walk from "../assets/mouse_walk.gif";
import "../styles.css";
import MouseMessage from "./MouseMessage";

const LilMouse = () => {
  const [staticMouse, setStaticMouse] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setStaticMouse(true);
      setShowMessage(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!staticMouse ? (
        <div
          style={{
            position: "fixed",
            left: "0",
            bottom: "-0.5rem",
          }}
        >
          <div className="moveArrow">
            <img
              src={mouse_walk}
              alt="catch me if you can"
              style={{
                width: "7.3rem",
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <MouseMessage showMessage={showMessage} />
          <img
            src={mouse_walk}
            alt="catch me if you can"
            style={{
              width: "7.3rem",
              position: "fixed",
              right: "12px",
              bottom: "-0.25rem",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LilMouse;

//   const [ref, setRef] = useState(null);
//   const [mouseMove, setMouseMove] = useState(true);
//   const [xPos, setXPos] = useState(0);
//   const onButtonClick = () => {
//     setXPos(ref.getBoundingClientRect().x);
//     setMouseMove(false);
//     let timer1 = setTimeout(() => {
//       setMouseMove(true);
//     }, 3000);
//     return () => {
//       clearTimeout(timer1);
//     };
//   };
// ref={(ref) => {
//   if (!ref) return;
//   return setRef(ref);
// }}
// onClick={onButtonClick}
// <div>
//   <img
//     style={{
//       position: "fixed",
//       left: `${xPos + 50}px`,
//       bottom: "0rem",
//       width: "2rem",
//       height: "4.5rem",
//     }}
//     src={mouse_stare}
//     alt="AY IM WALKIN HERE"
//   />
// </div>
