import React from "react";
import Container from "../components/Container";
import "./Contact.css";
function Contact() {
  return (
    <>
      <Container text="Contact Us" />
      <div className="colourContainer">
        <h1 className="aboutText">
          <p>For any inquiries, please contact us at:</p>
          <ul>
        <li className="contactLink">
          <strong className="contactText">Email:</strong> <a className="linkText" href="mailto:melbcityvolleyball@gmail.com">melbcityvolleyball@gmail.com</a>
        </li>
        <li className="contactLink">
          <strong className="contactText">Phone:</strong> <a className="linkText" href="tel:+1234567890">+1234567890</a>
        </li>
        <li className="contactLink">
          <strong className="contactText">Facebook:</strong> <a className="linkText" href="https://www.facebook.com/melbcityvolleyball/">Melb City Volleyball</a>
        </li>
        <li className="contactLink">
          <strong className="contactText">Instagram:</strong> <a className="linkText" href="https://www.instagram.com/example">@melbcityvb</a>
        </li>
      </ul>
        </h1>
      </div>
      <div className="bottomContainer">  
      </div>
    </>
  );
}

export default Contact;
