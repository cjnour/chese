import React, { useEffect, useState } from "react";
import "./App.css";
import Tabs from "./Components/Tabs";
import Loading from "./Components/Loading";

const App = () => {
  const [mouseLoader, setMouseLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMouseLoader(false);
    }, 1200);
  });

  return <div>{mouseLoader ? <Loading /> : <Tabs />}</div>;
};

export default App;
