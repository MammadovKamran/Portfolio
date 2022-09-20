import React from "react";
import { Link } from "react-router-dom";
import blackLogo from "../../assets/svg/BlackLogo.svg";
import whiteLogo from "../../assets/svg/WhiteLogo.svg";
import styles from "./nav.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div >
        <div className={styles.left_side}>
          <img src={whiteLogo} className={styles.logo} alt="logo" />
        </div>
        <ul className={styles.right_side}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutMe">About</Link>
          </li>
          <li>
            <Link to="/myProjects">Portfolio</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/contactMe">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
