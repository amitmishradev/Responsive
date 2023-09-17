import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>REACT DEVELOPER</h1>
      </div>
    </div>
  );
};

export default HeroImg;
