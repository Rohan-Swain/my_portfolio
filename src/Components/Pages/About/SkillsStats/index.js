import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faGitAlt,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedLetter from "../../../Animation";

function SkillsStats() {
  const [letterClass, setLetterClass] = useState("letters");
  const logoArr = [faHtml5, faCss3Alt, faJs, faGitAlt, faSass, faReact];

  setTimeout(() => setLetterClass("letters-hover"), 5000);

  return (
    <div id="statsView">
      <h1>
        <AnimatedLetter
          letterArr={"Skills".split("")}
          letterClass={letterClass}
          offset={30}
        />
      </h1>
      <div id="logoContainer">
        <ul>
          {logoArr.slice(0, 3).map((item, index) => (
            <li className={`SkillsLogo _${index + 20}`} key={index}>
              <FontAwesomeIcon icon={item} className="skillLogo" />
            </li>
          ))}
        </ul>
        <ul>
          {logoArr.slice(3, 6).map((item, index) => (
            <li className={`SkillsLogo _${index + 23}`} key={index}>
              <FontAwesomeIcon icon={item} className="skillLogo" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsStats;
