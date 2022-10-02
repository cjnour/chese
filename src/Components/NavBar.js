import React from "react";
import chese_logo from "../assets/chese_wback.png";
import "../styles.css";

const NavBar = () => {
  return (
    <div>
      <div>
        <a href="/">
          <img src={chese_logo} alt="chese" className="cheselogo" />
        </a>
      </div>
      <div className="navbar">
        <h3
          className="home"
          onClick={() => {
            console.log("home");
          }}
        >
          home
        </h3>
        <h3
          className="work"
          onClick={() => {
            console.log("work");
          }}
        >
          work
        </h3>
        <h3
          className="exp"
          onClick={() => {
            console.log("exp");
          }}
        >
          experience
        </h3>
        <h3
          className="con"
          onClick={() => {
            console.log("con");
          }}
        >
          contact
        </h3>
      </div>
    </div>
  );
};

export default NavBar;
