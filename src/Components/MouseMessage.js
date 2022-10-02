import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import work_msg from "../assets/work_msg.png";
import exp_msg from "../assets/exp_msg.png";
import contact_msg from "../assets/contact_msg.png";

const MouseMessage = (props) => {
  return (
    <div>
      {props.showMessage && (
        <Link to={``} className="navitemslink">
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
        </Link>
      )}
    </div>
  );
};

export default MouseMessage;
