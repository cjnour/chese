import React from "react";
import chese_hover from "../assets/chese_wmouse.png";
import { Link } from "react-router-dom";
import "../styles.css";
import { connect } from "react-redux";
import { setRoute } from "../Redux/Main/MainActions";

const NavBar = (props) => {
  return (
    <div>
      <div>
        <a href="/">
          <img src={chese_hover} alt="chese" className="cheselogo" />
        </a>
      </div>
      <div className="navbar">
        <Link to="/" className="navitemshome">
          <h3
            className="home"
            onClick={() => {
              props.setRoute("");
            }}
          >
            home
          </h3>
        </Link>
        <Link to="work" className="navitemswork">
          <h3
            className="work"
            onClick={() => {
              props.setRoute("work");
            }}
          >
            work
          </h3>
        </Link>
        <Link to="experience" className="navitemsexp">
          <h3
            className="exp"
            onClick={() => {
              props.setRoute("experience");
            }}
          >
            experience
          </h3>
        </Link>
        <Link to="contact" className="navitemscon">
          <h3
            className="con"
            onClick={() => {
              props.setRoute("contact");
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
