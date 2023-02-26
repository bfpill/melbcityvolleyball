import React from 'react';
import './Banner.css';
import bannerSlim from "../images/bannerSlim.png"

function Banner() {
  return (
    <div>
      <img
        src={bannerSlim}
        alt="My Image"
        className="banner-image"
      />
    </div>
  );
}

export default Banner;