import React from "react";
import "./Container.css";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSceX01rfyydjtwKSMEcpp_vKb7Mchkm_Am5LJ22giYgCJyCkg/viewform?usp=sf_link"; // Replace with your actual form URL

const handleSignUpClick = () => {
  window.open(formUrl, "_blank");
};

function SignUpContainer(props) {
  return (
    <div>
        <button onClick = {handleSignUpClick} className="textlink" >CLICK TO SIGN UP FOR MAY 7TH GRASS TRIPLES</button> 
    </div>
  );
}

export default SignUpContainer;
