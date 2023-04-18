import React from "react";
import "./TextButton.css";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScTZ0z6x7d7sWTOR_iXYQGYI-goKAz_Iv_T452TgcxZ7AoafA/viewform?usp=sharing"; 
const addressUrl = 'https://goo.gl/maps/ypHk6FqEfmCTqogh6';

const handleFormClick = () => {
  window.open(formUrl, "_blank");
};

const handleNeedMapClick = () => {
  window.open(addressUrl, "_blank");
};

function TextButton({text, type}) {
  if(type === "form"){
    return (
      <div>
          <button onClick = {handleFormClick} className="textlinkGrey" >{text}</button> 
      </div>
    );
  }
  else if(type === "map"){
    return (
      <div>
          <button onClick = {handleNeedMapClick} className="textlinkGrey" >{text}</button> 
      </div>
    );
  }
 
}

export default TextButton;
