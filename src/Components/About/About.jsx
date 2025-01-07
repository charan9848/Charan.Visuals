import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/Charan.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            As a 3D artist, I am deeply passionate about transforming creative ideas into stunning visual experiences. With expertise in Blender and After Effects, I focus on crafting realistic models, animations, and VFX that tell a story and captivate audiences. I combine creativity with technical skill to bring concepts to life, always pushing myself to evolve and explore new techniques. 
            </p>
            <p>
            My goal is to consistently exceed client expectations and create work that resonates emotionally, whether it's for gaming, film, or product design. Every project I take on reflects my commitment to quality and my desire to continuously grow in the world of 3D artistry.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Blender</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>After Effects</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Premiere pro</p>
              <hr style={{ width: "60%" }} />
            </div>
            
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTs COMPLETED</p>
        </div>
        <hr />
        {/* <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
