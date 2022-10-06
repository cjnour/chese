import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { connect } from "react-redux";
import Footer from "./Components/Footer";
import LilMouse from "./Components/LilMouse";
import { getLocation } from "./Redux/Main/MainActions";

const App = () => {
  const [mouseLoader, setMouseLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMouseLoader(false);
    }, 1200);
  }, []);

  return (
    <div className="App">
      <Router>
        {mouseLoader ? (
          <Loading />
        ) : (
          <div style={{ flexDirection: "column" }}>
            <div style={{ height: "7rem", flex: 1 }}>
              <NavBar />
            </div>
            <div style={{ flex: 3 }}>
              <AnimatedRoutes />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "0.5rem",
                left: "1rem",
                flex: 1,
              }}
            >
              <Footer />
              <LilMouse />
            </div>
          </div>
        )}
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocation: () => dispatch(getLocation()),
  };
};

export default connect(mapDispatchToProps)(App);
