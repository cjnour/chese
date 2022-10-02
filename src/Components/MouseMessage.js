import React from "react";
import "../styles.css";
import work_msg from "../assets/work_msg.png";
import exp_msg from "../assets/exp_msg.png";
import contact_msg from "../assets/contact_msg.png";

const MouseMessage = () => {
  return (
    <div>
      <img
        src={work_msg}
        alt="mouse message"
        id="work_msg"
        className="mouse_msg"
        style={{
          width: "13rem",
          position: "fixed",
          right: "0.5rem",
          bottom: "1.5rem",
        }}
      />
    </div>
  );
};

export default MouseMessage;
