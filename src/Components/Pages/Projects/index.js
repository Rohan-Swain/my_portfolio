import React, { useState } from "react";
import AnimatedLetter from "../../Animation";
import "./index.scss";
import Container from "../../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

function Projectspage() {
  const [letterClass, setLetterClass] = useState("letters");

  setTimeout(() => setLetterClass("letters-hover"), 2000);

  return (
    <div className="container projectspage">
      <div className="textarea">
        <h1>
          <AnimatedLetter
            letterArr={"My".split("")}
            letterClass={letterClass}
            offset={1}
          />
          <AnimatedLetter
            letterArr={"Projects".split("")}
            letterClass={letterClass}
            offset={3}
            spanStyle="space"
          />
        </h1>
        <div className="description">
          <p>Here are some of my Best Projects.</p>
          <p>
            For More of my Projects,
            <br />
            checkout my CodePen
          </p>
          <a
            target={"_blank"}
            href="https://codepen.io/Rohan-Swain/pens/public"
            title="CodePen"
          >
            <FontAwesomeIcon icon={faCodepen} className="codepenLogo" />
          </a>
        </div>
      </div>
      <Container />
    </div>
  );
}

export default Projectspage;
