import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import profile_img from "../assets/png/profile.png";

const AboutMe = () => {
  return (
    <div className="aboutMe_container">
      <div>
        <div className="aboutMe_leftSide">
          <img src={profile_img} alt="Profile img" />
        </div>
        <div className="aboutMe_rightSide">
          <h3>
            Kamran <span className="home_text_surname">Mammadov</span>
          </h3>
          <h3>
            <span>Front End</span> developer
          </h3>
          <div className="border"></div>
          <p>
            My name is <span style={{color:"white"}}>Kamran Mammadov</span> . I am a Front end developer, and I'm very passionate and dedicated to my work. I’m currently working on web development technologies like JavaScript, React etc. 
            {/* I learn more
            technologies and never stop creating new ideas. */}
          </p>
          <Button className="home_button">
            <Link to="/contactMe">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
