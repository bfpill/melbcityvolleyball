import React from "react";
import "./GamesInfo.css";
import logoBlack from "../images/logoBlack.png";

function GameInfo() {
  return (
    <div className="info-Container">
      <main className="Games-Info">
        <h2 className="h2">Upcoming Games</h2>
        <ul>
          <li>
            <h3 className="h3">Wednesday, March 2, 2023</h3>
            <p className="p">Location: Central Park</p>
            <p className="p">Time: 6:00 pm - 8:00 pm</p>
          </li>
          <li>
            <h3 className="h3">Saturday, March 5, 2023</h3>
            <p className="p">Location: Lincoln Park</p>
            <p className="p">Time: 11:00 am - 1:00 pm</p>
          </li>
          <li>
            <h3 className="h3">Tuesday, March 8, 2023</h3>
            <p className="p">Location: Riverside Park</p>
            <p className="p"> Time: 6:00 pm - 8:00 pm</p>
          </li>
        </ul>
        <button className="button">View All Upcoming Games</button>
      </main>
      <main className="image-container">
        <img src={logoBlack} className="logo-image" />
      </main>
    </div>
  );
}

export default GameInfo;
