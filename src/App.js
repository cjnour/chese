import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LilMouse from "./Components/LilMouse";
import Home from "./Pages/Home";

const App = () => {
  const [mouseLoader, setMouseLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMouseLoader(false);
    }, 1200);
  });

  return (
    <div className="App">
      {mouseLoader ? (
        <Loading />
      ) : (
        <div className="page-container">
          <div style={{ flex: "0.05" }}>
            <NavBar />
          </div>
          <div className="content-wrap">
            <Home />
          </div>
          <div>
            <Footer />
            <LilMouse />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
