import React, { useState, useEffect } from "react";
import mouse_walk from "../assets/mouse_walk.gif";
import "../styles.css";
import MouseMessage from "./MouseMessage";

const LilMouse = () => {
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

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const [staticMouse, setStaticMouse] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setStaticMouse(true);
      setShowMessage(true);
    }, 5000);
    return () => clearTimeout(timer);
  });

  const { height, width } = useWindowDimensions();

  return (
    <div>
      <div>
        {width}
        {height}
      </div>
      {!staticMouse ? (
        <div className="moveArrow">
          <img
            src={mouse_walk}
            alt="catch me if you can"
            id="mouse_walk"
            style={{
              width: "7.3rem",
              position: "fixed",
              left: "0",
              bottom: "0",
            }}
            // ref={(ref) => {
            //   if (!ref) return;
            //   return setRef(ref);
            // }}
            // onClick={onButtonClick}
          />
        </div>
      ) : (
        <div>
          <MouseMessage showMessage={showMessage} />
          <img
            src={mouse_walk}
            alt="catch me if you can"
            id="mouse_wait"
            style={{
              width: "7.3rem",
              position: "fixed",
              right: "0",
              bottom: "0",
            }}
          />
        </div>

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
      )}
    </div>
  );
};

export default LilMouse;
