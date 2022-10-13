import React, { useState } from "react";
import AnimatedLetter from "../../Animation";
import "./index.scss";

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
        <p>Here are some of my Best Projects.</p>
      </div>
    </div>
  );
}

export default Projectspage;
