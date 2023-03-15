import React from "react";
import "./About.css";
import Container from "../components/Container";
import groupPhoto from "../images/groupPhoto.JPG";
import groupPhoto2 from "../images/groupPhoto2.JPG";

function About() {
  return (
    <>
      <div className="colourContainer">
        <h1 className="aboutText">
        Welcome to the first-ever organized grass volleyball tournament in Victoria, Australia!
        <br />
         We are excited to bring this fantastic version of our favourite sport to Australia.
        <br />
        Our aim is to regularly host weekend tournaments and 
          <br />
        </h1>
      </div>
      <div className="imageContainer">
        <img className="image" src={groupPhoto} />
      </div>
      <div className="colourContainer">
        <h1 className="aboutText">
          Our mission is to provide a welcoming and inclusive environment where
          everyone can enjoy the thrill of the game, make new friends, and
          improve their skills.
          <br />
          <br />
          We are excited to announce that we will soon be hosting our first
          pickup event, which will provide a fantastic opportunity for our
          members to come together and showcase their abilities. We are
          committed to promoting the sport of volleyball and fostering a sense
          of community, and we can't wait to see you on the court!
          <br />
          <br />
          We believe that volleyball is more than just a sport; it's an
          opportunity to build friendships, stay active, and have fun. Whether
          you're a seasoned player or a beginner, we have programs and events
          that cater to your needs and skill level. We are constantly seeking
          new ways to improve our organization and provide the best possible
          experience for our members. Join us at Melb City Volleyball and
          discover the joy and excitement of this fantastic sport!
        </h1>
      </div>
      <div className="imageContainer">
        <img className="image" src={groupPhoto2} />
      </div>
    </>
  );
}

export default About;
