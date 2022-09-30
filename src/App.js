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

  return <div>{mouseLoader ? <Loading /> : <NavBar />}</div>;
};

export default App;
