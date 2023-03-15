import React from 'react';
import Banner  from "../components/Banner.js"
import SignUpContainer from '../components/Container';
import TextButton from "../components/TextButton"
import "./Home.css"
function Home() {
    return (
      <>
      <div className="App">
        <div className="sideways-container">
          <Banner/>
        </div>
        <SignUpContainer text="SIGN UP"/>
        <TextButton text="Need help finding a Team?"/>
      </div>
      <div className="sideways-container">
          <Banner/>
        </div>
      </>
    );
  }
  
  export default Home;