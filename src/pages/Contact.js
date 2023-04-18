import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>

        <div className="colourContainer">
          <h1 className="aboutText">
            <p>For any inquiries, please contact us at:</p>
            <ul>
              <li className="contactLink">
                <strong className="contactText">Email:</strong>{" "}
                <a
                  className="linkText"
                  href="mailto:vicgrassvolleyball@gmail.com"
                >
                  vicgrassvolleyball@gmail.com
                </a>
              </li>
              <li className="contactLink">
                <strong className="contactText">Phone:</strong>{" "}
                <a className="linkText" href="tel:+1234567890">
                  +0401 154 327
                </a>
              </li>
              <li className="contactLink">
                <strong className="contactText">Facebook:</strong>{" "}
                <a
                  className="linkText"
                  href="https://www.facebook.com/vicgrassvolleyball/"
                >
                  Vic Grass Volleyball
                </a>
              </li>
              <li className="contactLink">
                <strong className="contactText">Instagram:</strong>{" "}
                <a
                  className="linkText"
                  href="https://www.instagram.com/vigrassvolley"
                >
                  @vicgrassvolley
                </a>
              </li>
            </ul>
          </h1>
        </div>
        <div className="bottomContainer"></div>
        <div className="fakeContainer"></div>
    </>
  );
}

export default Contact;
