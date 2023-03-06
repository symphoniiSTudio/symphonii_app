import React from 'react';
import '../../App.css';
import HomeSlider from '../HomeComponents/HomeSlider';
import HomeNavbarmain from '../HomeNavbarmain'
import OurServiceHome from '../HomeComponents/OurServiceHome'
import HomeComponent from '../HomeComponents/IntroductionComponent'
import HomeValue1 from '../HomeComponents/HomeValue1';
import Client from '../HomeComponents/Client';
import Footer from '../Footer';
import Dvert from '../HomeComponents/Dvert';
import Comic from '../HomeComponents/Comic';

export default function Home() {
  return (
    <>
     <div className="homecontainer">
     <HomeNavbarmain/>
       <HomeSlider/>
       <Dvert/>
       <HomeComponent/>
       <OurServiceHome/>
      <HomeValue1/>
      <Comic/>
       <Client/>
       <Footer/>
     </div>
    </>
  );
}
