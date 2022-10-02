import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";

const App = () => {
  const [mouseLoader, setMouseLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMouseLoader(false);
    }, 1200);
  });

  return (
    <div className="App">
      <Router>
        {mouseLoader ? (
          <Loading />
        ) : (
          <div className="page-container">
            <NavBar />
            <AnimatedRoutes />
          </div>
        )}
      </Router>
    </div>
  );
};

export default App;
