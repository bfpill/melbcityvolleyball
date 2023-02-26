import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <header className="App-header">
      <div className="container">
        <h1>{props.text}</h1>    
      </div>
    </header>
  );
}

export default Container;
