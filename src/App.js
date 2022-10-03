import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/ConfigureStore";
import Footer from "./Components/Footer";

const App = () => {
  const [mouseLoader, setMouseLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMouseLoader(false);
    }, 1200);
  });

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {mouseLoader ? (
            <Loading />
          ) : (
            <div className="page-container" id="stacked-col">
              <div style={{ height: "7rem" }}>
                <NavBar />
              </div>
              <div>
                <AnimatedRoutes />
              </div>
              <div style={{ backgroundColor: "green" }}>
                <Footer />
              </div>
            </div>
          )}
        </Router>
      </div>
    </Provider>
  );
};

export default App;
