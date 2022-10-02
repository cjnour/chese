import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
