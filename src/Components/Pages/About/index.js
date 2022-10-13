import React, { useState } from "react";
import AnimatedLetter from "../../Animation";
import "./index.scss";

function Aboutpage() {
  const [letterClass, setLetterClass] = useState("letters");

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
          {/* placeholder */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          {/* Placeholder */}
        </p>
        <p>
          {/* placeholder */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          {/* Placeholder */}
        </p>
      </div>
    </div>
  );
}

export default Aboutpage;
