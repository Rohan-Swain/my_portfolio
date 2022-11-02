import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AnimatedLetter from "../../Animation";
import "./index.scss";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faGitAlt,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Aboutpage() {
  const [letterClass, setLetterClass] = useState("letters");
  const logoArr = [faHtml5, faCss3Alt, faJs, faGitAlt, faSass, faReact];

  setTimeout(() => setLetterClass("letters-hover"), 1500);

  return (
    <div className="container aboutpage">
      <div className="textarea">
        <h1>
          <AnimatedLetter
            letterArr={"About".split("")}
            letterClass={letterClass}
            offset={1}
          />
          <AnimatedLetter
            letterArr={"Me!".split("")}
            letterClass={letterClass}
            offset={6}
            spanStyle="space"
          />
        </h1>
        <p>
          Hi!, I'm Rohan Swain, a Self-taught Frontend Developer from India. I
          have a passion for creating stunning Web UIs, animations and creating
          excellent UX which I myself would love to use.
        </p>
        <p>
          I'm quiet confident, problem solver with high attention to detail,
          fast-learner, Generally Curious and perpetually working to hone my
          skills.
        </p>
        <p>
          If I need to define myself in one sentence, that would be 'A
          Tech-Obsessed, Car guy who also loves to take photographs and play
          Videogames.'
        </p>
        <p>
          <span>When I'm not using VS Code (My Favourite):</span> I'm probably
          travelling, playing Videogames or making 3D Scenes.
        </p>
      </div>
      <div id="statsView">
        <h1>Skills</h1>
        <div id="logoContainer">
          <ul>
            {logoArr.slice(0, 3).map((item) => (
              <li>
                <FontAwesomeIcon icon={item} className="skillLogo" />
              </li>
            ))}
          </ul>
          <ul>
            {logoArr.slice(3, 6).map((item) => (
              <li>
                <FontAwesomeIcon icon={item} className="skillLogo" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
