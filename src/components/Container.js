import React from "react";
import "./Container.css";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf10ublqiSHLH0X1TYEzM4DjmYzZ1hCrb5jktUrC5hPayB3Rw/viewform"; // Replace with your actual form URL

const handleSignUpClick = () => {
  window.open(formUrl, "_blank");
};

function SignUpContainer(props) {
  return (
    <div>
        <button onClick = {handleSignUpClick} className="textlink" >SIGN UP</button> 
    </div>
  );
}

export default SignUpContainer;
