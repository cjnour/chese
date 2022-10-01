import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";

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
        <div>
          <div
            style={{
              height: "100px",
              border: "5px solid #000",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <NavBar />
          </div>
          <footer
            style={{
              height: "40px",
              width: "100%",
              background: "#f00",
              marginTop: "auto",
            }}
          >
            a website by
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
