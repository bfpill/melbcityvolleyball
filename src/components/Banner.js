import React from 'react';
import './Banner.css';


function Banner({image}) {
  return (
    <div >
      <img    
        src={image}
        alt="My Image"
        className="banner-image"
      />
    </div>
  );
}

export default Banner;