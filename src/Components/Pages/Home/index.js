import React, { useState } from "react";
import "./index.scss";
import AnimatedLetter from "../../Animation";

function Homepage() {
  const [letterClass, setLetterClass] = useState("letters");

  setTimeout(() => setLetterClass("letters-hover"), 3000);

  return (
    <div className="container homepage">
      <div className="textarea">
        <h1>
          <AnimatedLetter
            letterArr={"HI!".split("")}
            letterClass={letterClass}
            offset={1}
          />
          <br />
          <AnimatedLetter
            letterArr={"I'm".split("")}
            letterClass={letterClass}
            offset={4}
          />
          <AnimatedLetter
            letterArr={"Rohan".split("")}
            letterClass={letterClass}
            offset={7}
            spanStyle="space"
          />
          <br />
          <AnimatedLetter
            letterArr={"Web".split("")}
            letterClass={letterClass}
            offset={12}
          />
          <AnimatedLetter
            letterArr={"Developer".split("")}
            letterClass={letterClass}
            offset={15}
            spanStyle="space"
          />
        </h1>
        <h2>Frontend Developer | React Developer</h2>
        <a href="">See My Resume</a>
      </div>
    </div>
  );
}

export default Homepage;
