import React from 'react';
import Banner  from "../components/Banner.js"
import InfoComp from '../components/Container';
import GameInfo from '../components/GamesInfo';

function Home() {
    return (
      <>
      <div className="App">
        <Banner/>
        <InfoComp text="Serving Up Fun: Come Play Volleyball with Melb City!"/>
        <GameInfo/>
      </div>
      </>
    );
  }
  
  export default Home;