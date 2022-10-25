import React, { useState } from "react";
import AnimatedLetter from "../../Animation";
import "./index.scss";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import ProjectLogo1 from "../../../assets/images/denoise.png";

function Projectspage() {
  const [letterClass, setLetterClass] = useState("letters");
  const projectArray = [
    {
      src: ProjectLogo1,
      alt: "Project1",
    },
    {
      src: ProjectLogo1,
      alt: "Project2",
    },
    {
      src: ProjectLogo1,
      alt: "Project3",
    },
    {
      src: ProjectLogo1,
      alt: "Project4",
    },
    {
      src: ProjectLogo1,
      alt: "Project5",
    },
  ];

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
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} className="codepenLogo" />
          </a>
        </div>
      </div>
      <Container projectArray={projectArray} offset={1} />
    </div>
  );
}

export default Projectspage;
