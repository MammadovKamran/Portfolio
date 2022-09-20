import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const Home = () => {
  return (
    <div className="home_container">
      <div className="home_text">
        <h3>
          Kamran <span className="home_text_surname">Mammadov</span>
        </h3>
        <h3>
          <span>Front End</span> developer
        </h3>

        <Link to="/contactMe">
          <Button className="home_button">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
