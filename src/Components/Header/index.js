import React, { useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faHome,
  faProjectDiagram,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    return menuVisible ? setMenuVisible(false) : setMenuVisible(true);
  };

  return (
    <div className="header">
      <div id="logo">
        <Logo />
      </div>
      <div id="navbar">
        <ul>
          <li>
            <NavLink end to="/">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </li>
          <li>
            <NavLink end to="about">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
          <li>
            <NavLink end to="projects">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </NavLink>
          </li>
          <li>
            <NavLink end to="contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="socials">
        <a href="" target={"_blank"}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/Rohan-Swain"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div id="menuBar">
        <FontAwesomeIcon
          className="menuBar"
          icon={faBars}
          onClick={handleMenu}
        />
        <div
          id="mobileMenu"
          style={{
            transform: `${menuVisible ? "translateX(0)" : "translateX(100%)"}`,
          }}
        >
          <span id="back">
            <FontAwesomeIcon icon={faX} onClick={handleMenu} />
          </span>
          <Link to="/" onClick={handleMenu}>
            <div id="mobileHeaderLogo">
              <Logo />
            </div>
          </Link>
          <div id="mobNav" onClick={handleMenu}>
            <Link to="about">
              <span id="aboutmelink">About</span>
            </Link>
            <Link to="projects" onClick={handleMenu}>
              <span id="projectslink">Projects</span>
            </Link>
            <Link to="contact" onClick={handleMenu}>
              <span id="contactlink">Contact</span>
            </Link>
          </div>
          <div id="mobSocials">
            <span id="linkedInlink">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span id="githublink">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
