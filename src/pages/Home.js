import React from 'react';
import './Home.css';
import Banner  from "../components/Banner.js"
import Navbar from "../components/Navbar.js"
import InfoComp from '../components/InfoComp';
import GameInfo from '../components/GamesInfo';
import Footer from '../components/Footer';

function Home() {
    return (
      <>
      <div className="App">
        <Banner/>
        <InfoComp />
        <GameInfo/>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default Home;