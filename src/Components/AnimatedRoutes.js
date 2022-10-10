import React, { useEffect, useState } from "react";
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { setRoute } from "../Redux/Main/MainActions";
import "../styles.css";

const AnimatedRoutes = (props) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.setRoute(location.pathname.substring(1));
  }, [location.pathname, props]);

  const newClick = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </AnimatePresence>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedRoutes);
