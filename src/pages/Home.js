import React from "react";
import Banner from "../components/Banner.js";
import SignUpContainer from "../components/Container";
import TextButton from "../components/TextButton";
import "./Home.css";
import VicGrassHorizontal1Grain from "../images/22nd.png";

import InfoBanner from "../images/InfoBanner.png";
import Map from "../images/Map.png"

function Home() {
  return (
    <>
      <div className="App">
        <div className="sideways-container">
          <Banner rotation="0" image={VicGrassHorizontal1Grain} />
        </div>
        <div className="sideways-container">
          <Banner image={InfoBanner} />
        </div>
        <SignUpContainer text="SIGN UP" />
        <TextButton type="form" text="Need help finding a Team?" />
        <div className="container">
      <div className="text">
        <h1>Tournament Location</h1>
      <ul>
        <li className="details">240-564 Royal Parade, Carlton North VIC 3054</li>
        <li className="details">Parking is available in on the nearby streets </li>
        <li className="details">Princes Park is also accessible via Tram</li>
      </ul>
      <div>
    </div>
      </div>
      <div className="image">
        <img src={Map} alt="Image" />
      </div>
    </div>
        <TextButton type="map" text="Open in Google Maps" />
      </div>
    </>
  );
}

export default Home;
