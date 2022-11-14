import React, { useState } from "react";
import AnimatedLetter from "../../Animation";
import "./index.scss";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import ProjectLogo1 from "../../../assets/images/MP.webp";
import ProjectLogo2 from "../../../assets/images/TC.webp";
import ProjectLogo3 from "../../../assets/images/KD.webp";
import ProjectLogo4 from "../../../assets/images/PC.webp";
import ProjectLogo5 from "../../../assets/images/CA.webp";

function Projectspage() {
  const [letterClass, setLetterClass] = useState("letters");
  const [hoverClass, setHoverClass] = useState("");

  const projectArray = [
    {
      src: ProjectLogo1,
      alt: "My Portfolio",
      liveLink: "",
    },
    {
      src: ProjectLogo2,
      alt: "Tesla Clone",
      liveLink: "https://rohan-swain.github.io/tesla_clone/",
    },
    {
      src: ProjectLogo3,
      alt: "Kanji Dictionary",
      liveLink: "https://rohan-swain.github.io/kanji-dictionary/",
    },
    {
      src: ProjectLogo4,
      alt: "Pomodoro Clock",
      liveLink: "https://codepen.io/Rohan-Swain/full/jOYygjb",
    },
    {
      src: ProjectLogo5,
      alt: "CRUD App",
      liveLink: "https://rohan-swain.github.io/crud-app/#/",
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
