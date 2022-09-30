import React from "react";
import chese_logo from "../assets/chese_wback.png";
import "../styles.css";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <h4
          className="home"
          onClick={() => {
            console.log("home");
          }}
        >
          home
        </h4>
        <h4
          className="work"
          onClick={() => {
            console.log("work");
          }}
        >
          work
        </h4>
        <h4
          className="exp"
          onClick={() => {
            console.log("exp");
          }}
        >
          experience
        </h4>
        <h4
          className="con"
          onClick={() => {
            console.log("con");
          }}
        >
          contact
        </h4>
      </div>
      <div>
        <img src={chese_logo} alt="chese" className="cheselogo" />
      </div>
    </div>
  );
};

export default NavBar;
