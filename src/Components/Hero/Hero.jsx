import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Mamun ,</span> Full Stack Web Developer <br /> based in
        Bangladesh
      </h1>
      <p>
        I am a Full Stack Web Developer with 10 years of experience. I can
        provide clean code and pixel perfect design. I also make the website
        more & more interactive with web animations.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
