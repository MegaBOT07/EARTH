import React from 'react';
import Navigation from './Navigation';
import bgImage from '../assets/landingpageimage.png';
import AboutLandingHeading from './AboutLandingHeading';
import AboutLandingimgsec from './AboutLandingDescription';

const AboutLanding = () => {
  return (
    <>
      <Navigation />
      <div
        className="relative bg-cover bg-center text-white"
        style={{ height: '270vh', backgroundImage: `url(${bgImage})` }}
      >
        <AboutLandingHeading />
        <AboutLandingimgsec />
        
      </div>
    </>
  );
};

export default AboutLanding;
