import React from "react";
import Banner from "../components/Banner.js";
import SignUpContainer from "../components/Container";
import TextButton from "../components/TextButton";
import "./Home.css";
import bannerSlim from "../images/Banner1.png";
import InfoBanner from "../images/InfoBanner.png";
import Map from "../images/Map.png"

function Home() {
  return (
    <>
      <div className="App">
        <div className="sideways-container">
          <Banner rotation="0" image={bannerSlim} />
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
        <li className="details">123 Main St, Anytown USA</li>
        <li className="details">Parking is available in the lot behind the building</li>
        <li className="details">Please use the designated visitor spots</li>
        <li className="details">If those are full, street parking is also available</li>
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
