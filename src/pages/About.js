import React from "react";
import "./About.css";
import Container from "../components/Container";
import waupaca1 from "../images/waupaca1.jpg";
import waupaca2 from "../images/waupaca2.jpg";
import slipSlide from "../images/slipSide.jpg";

function About() {
  return (
    <>
      <div className="colourContainer">
        <h1 className="aboutText">
        Welcome to the first-ever organized grass volleyball tournament in Victoria, Australia!
        <br />
        Get ready for an exciting day of 3 vs 3 grass volleyball action at the upcoming tournament in Princes Park, Melbourne, Victoria! 
        </h1>
        </div>
        
      <div className="imageContainer">
        <img className="image" src={slipSlide} />
      </div>

      <div className="colourContainer">
        <h1 className="aboutText">
        The tournament is open to mixed-gender teams, with players battling it out on a grass court using a men's net. Whether you're an experienced player or a beginner, this tournament is a fantastic opportunity to showcase your skills and experience the thrill of grass volleyball in a beautiful outdoor setting.
        </h1>
      </div>
      <div className="imageContainer">
        <img className="image" src={waupaca1} />
      </div>
      <div className="imageContainer">
        <img className="image" src={waupaca2} />
      </div>
    </>
  );
}

export default About;
