import React from "react";
import "./TextButton.css";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScTZ0z6x7d7sWTOR_iXYQGYI-goKAz_Iv_T452TgcxZ7AoafA/viewform"; // Replace with your actual form URL

const handleNeedHelpClick = () => {
  window.open(formUrl, "_blank");
};

function TextButton(props) {
  return (
    <div>
        <button onClick = {handleNeedHelpClick} className="textlinkGrey" >{props.text}</button> 
    </div>
  );
}

export default TextButton;
