import React from "react";
import "./App.css";
import "./styles.css";

const App = () => {
  return (
    <div>
      <h4
        className="home"
        onClick={() => {
          console.log("home");
        }}
      >
        home
      </h4>
      <h4
        className="work"
        onClick={() => {
          console.log("work");
        }}
      >
        work
      </h4>
      <h4
        className="exp"
        onClick={() => {
          console.log("exp");
        }}
      >
        experience
      </h4>
      <h4
        className="con"
        onClick={() => {
          console.log("con");
        }}
      >
        contact
      </h4>
    </div>
  );
};

export default App;
