import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/Charan.png";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Charan ,</span> 3d artist <br /> 
      </h1>
      <p>
      As a 3D artist, I use Blender and After Effects to create visually captivating models, animations, and VFX. My work combines creativity and technical skill to bring concepts to life and exceed client expectations.
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
