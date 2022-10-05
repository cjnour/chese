import React from "react";
import cjnour_logo from "../assets/cjnour_logo.png";

function Footer() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p style={{ color: "red" }}>a</p>
      <p style={{ color: "blue" }}>website</p>
      <p style={{ color: "rgb(0, 202, 0)" }}>by</p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={cjnour_logo}
          alt="chese"
          style={{ width: "6.25rem", height: "2.98rem" }}
        />
      </a>
    </div>
  );
}

export default Footer;
