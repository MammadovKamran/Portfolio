import React from "react";
import { Link } from "react-router-dom";
const ContactMe = () => {
  return (
    <div className="contact_container">
      <div>
        <div className="contact_top">
          <h3>
            <span>Front End</span> developer
          </h3>
          <div className="border"></div>
        </div>

        <div className="contact_main">
          <div className="contact_leftSide">
            <div>
              <Link to="#"> Baku, Azerbaijan</Link>
            </div>
            <div>
              <Link to="#">+994 051(070) 308 41 55</Link>
            </div>
            <div>
              <a href="mailto:example@gmail.com">kamran.97.memmedov@gmail.com</a>
            </div>
            <div>
              <a href=" https://www.facebook.com">@KamranMemmedov</a>
            </div>
          </div>
          <div className="contact_rightSide"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
