import React from "react";
import "./SidewaysContainer.css";

function SidewaysContainer(props) {
  return (
    <header className="App-header">
      <div className="container">
        <h1>{props.text}</h1>    
      </div>
    </header>
  );
}

export default SidewaysContainer;
