import React from "react";
import chese_logo from "../assets/chese_wback.png";
import { Link } from "react-router-dom";
import "../styles.css";
import { connect } from "react-redux";
import { setRoute } from "../Redux/Main/MainActions";

const NavBar = (props) => {
  let forceUpdate = props.useForceUpdate;

  return (
    <div>
      <div>
        <a href="/">
          <img src={chese_logo} alt="chese" className="cheselogo" />
        </a>
      </div>
      <div className="navbar">
        <Link to="/" className="navitemslink">
          <h3
            className="home"
            onClick={() => {
              props.setRoute("");
              forceUpdate();
            }}
          >
            home
          </h3>
        </Link>
        <Link to="work" className="navitemslink">
          <h3
            className="work"
            onClick={() => {
              props.setRoute("work");
              forceUpdate();
            }}
          >
            work
          </h3>
        </Link>
        <Link to="experience" className="navitemslink">
          <h3
            className="exp"
            onClick={() => {
              props.setRoute("experience");
              forceUpdate();
            }}
          >
            experience
          </h3>
        </Link>
        <Link to="contact" className="navitemslink">
          <h3
            className="con"
            onClick={() => {
              props.setRoute("contact");
              forceUpdate();
            }}
          >
            contact
          </h3>
        </Link>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
