import React, { useState } from "react";
import AnimatedLetter from "../../Animation";
import "./index.scss";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import ProjectLogo1 from "../../../assets/images/MP.png";
import ProjectLogo2 from "../../../assets/images/TC.png";
import ProjectLogo3 from "../../../assets/images/KD.png";
import ProjectLogo4 from "../../../assets/images/PC.png";
import ProjectLogo5 from "../../../assets/images/CA.png";

function Projectspage() {
  const [letterClass, setLetterClass] = useState("letters");
  const [hoverClass, setHoverClass] = useState("");

  const projectArray = [
    {
      src: ProjectLogo1,
      alt: "My Portfolio",
    },
    {
      src: ProjectLogo2,
      alt: "Tesla Clone",
    },
    {
      src: ProjectLogo3,
      alt: "Kanji Dictionary",
    },
    {
      src: ProjectLogo4,
      alt: "Pomodoro Clock",
    },
    {
      src: ProjectLogo5,
      alt: "CRUD App",
    },
  ];

  setTimeout(() => setLetterClass("letters-hover"), 2000);
  setTimeout(() => setHoverClass("hoverClass"), 3500);

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
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} className="codepenLogo" />
          </a>
        </div>
      </div>
      <Container
        hoverClass={hoverClass}
        projectArray={projectArray}
        offset={1}
      />
    </div>
  );
}

export default Projectspage;
