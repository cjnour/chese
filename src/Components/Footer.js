import React from "react";
import cjnour_logo from "../assets/cjnour_logo.png";
import LilMouse from "./LilMouse";

function Footer() {
  return (
    <div>
      <div style={{ position: "fixed", bottom: "-0.1rem", left: "1rem" }}>
        <p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ color: "red" }}>a</p>
            <p style={{ color: "blue" }}>website</p>
            <p style={{ color: "rgb(0, 202, 0)" }}>by</p>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <img
                src={cjnour_logo}
                alt="chese"
                style={{ width: "6.25rem", height: "2.98rem" }}
              />
            </a>
          </div>
        </p>
      </div>
      <LilMouse />
    </div>
  );
}

export default Footer;
