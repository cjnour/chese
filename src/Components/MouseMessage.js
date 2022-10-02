import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import work_msg from "../assets/work_msg.png";
import exp_msg from "../assets/exp_msg.png";
import contact_msg from "../assets/contact_msg.png";
import resume_msg from "../assets/resume_msg.png";
import { connect } from "react-redux";
import { setRoute } from "../Redux/Main/MainActions";

const MouseMessage = (props) => {
  const switchRoute = () => {
    if (props.route === "") {
      props.setRoute("work");
    } else if (props.route === "work") {
      props.setRoute("experience");
    } else if (props.route === "experience") {
      props.setRoute("contact");
    }
  };

  return (
    <div>
      {props.showMessage && (
        <div>
          {props.route === "" && (
            <Link
              className="navitemslink"
              onClick={() => {
                switchRoute();
              }}
              to={"/work"}
            >
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
          {props.route === "work" && (
            <Link
              className="navitemslink"
              onClick={() => {
                switchRoute();
              }}
              to={"/experience"}
            >
              <img
                src={exp_msg}
                alt="mouse message"
                id="exp_msg"
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
          {props.route === "experience" && (
            <Link
              className="navitemslink"
              onClick={() => {
                switchRoute();
              }}
              to={"/contact"}
            >
              <img
                src={contact_msg}
                alt="mouse message"
                id="contact_msg"
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
          {props.route === "contact" && (
            <a
              href="https://drive.google.com/file/d/15S_cuhdPFu3YCpIxcE0hFrM3lQi_USRV/view?usp=sharing"
              target="_blank"
            >
              <img
                src={resume_msg}
                alt="mouse message"
                id="contact_msg"
                className="mouse_msg"
                style={{
                  width: "13rem",
                  position: "fixed",
                  right: "0.5rem",
                  bottom: "1.5rem",
                }}
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => dispatch(setRoute(route)),
  };
};

const mapStateToProps = (state) => {
  return {
    route: state.MainReducer.route,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MouseMessage);
