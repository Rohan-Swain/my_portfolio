import React from "react";
import "./index.scss";
import LogoR from "../../assets/images/logo-r.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header">
      <div id="logo">
        <img src={LogoR} />
      </div>
      <div id="navbar">
        <ul>
          <li>
            <NavLink end to="/">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </li>
          <li>
            <NavLink end to="/about">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
          <li>
            <NavLink end to="/projects">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </NavLink>
          </li>
          <li>
            <NavLink end to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="socials">
        <a href="" target={"_blank"}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="" target={"_blank"}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default Header;
