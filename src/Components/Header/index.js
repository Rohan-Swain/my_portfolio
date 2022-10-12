import React from "react";
import "./index.scss";
import LogoR from "../../assets/images/logo-r.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
        </ul>
      </div>
      <div id="contact">
        <NavLink end to="/contact">
          Let's Talk
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
