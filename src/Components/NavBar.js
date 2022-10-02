import React from "react";
import chese_logo from "../assets/chese_wback.png";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <h3
            className="home"
            onClick={() => {
              console.log("home");
            }}
          >
            home
          </h3>
        </Link>
        <Link to="work">
          <h3
            className="work"
            onClick={() => {
              console.log("work");
            }}
          >
            work
          </h3>
        </Link>
        <Link to="experience">
          <h3
            className="exp"
            onClick={() => {
              console.log("exp");
            }}
          >
            experience
          </h3>
        </Link>
        <Link to="contact">
          <h3
            className="con"
            onClick={() => {
              console.log("con");
            }}
          >
            contact
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
