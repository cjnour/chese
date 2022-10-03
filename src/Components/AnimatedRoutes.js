import React from "react";
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../styles.css";

const AnimatedRoutes = () => {
  const location = useLocation();

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

export default AnimatedRoutes;
