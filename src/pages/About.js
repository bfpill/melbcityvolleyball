import React from "react";
import "./About.css";
import Container from "../components/Container";

function About() {
  return (
    <>
      <Container text="About Melb City Volleyball" />
      <div className="colourContainer">
        <h1 className="aboutText"> 
        Melb City Volleyball is a community-based organization that is proud to be headquartered in the vibrant city of Melbourne. 
        We welcome players of all skill levels to join our community and participate in the fun and excitement of volleyball. 
        <br/><br/>
        Melb City is run by passionate volleyball players who are committed to making sure your time on the court is as fun as possible.
        <br/><br/>
        Our mission is to provide a welcoming and inclusive environment where everyone can enjoy the thrill of the game, make new friends, and improve their skills. 
        <br/><br/>
        We are excited to announce that we will soon be hosting our first pickup event, which will provide a fantastic opportunity for our members to come together and showcase their abilities. 
        We are committed to promoting the sport of volleyball and fostering a sense of community, and we can't wait to see you on the court!
        <br/><br/>
        
        We believe that volleyball is more than just a sport; it's an opportunity to build friendships, stay active, and have fun. 
        Whether you're a seasoned player or a beginner, we have programs and events that cater to your needs and skill level.
        We are constantly seeking new ways to improve our organization and provide the best possible experience for our members. 
        Join us at Melb City Volleyball and discover the joy and excitement of this fantastic sport!
        </h1>
      </div>
    </>
  );
}

export default About;
