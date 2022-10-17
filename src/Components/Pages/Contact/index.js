import React, { useState } from "react";
import "./index.scss";
import AnimatedLetter from "../../Animation";

function Contactpage({ homepageClass }) {
  const [letterClass, setLetterClass] = useState("letters");

  setTimeout(() => setLetterClass("letters-hover"), 1500);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Done");
  };

  return (
    <div className={`container contactpage ${homepageClass && homepageClass}`}>
      <div className="textarea">
        <h1>
          <AnimatedLetter
            letterArr={"Contact".split("")}
            letterClass={letterClass}
            offset={1}
          />
          <AnimatedLetter
            letterArr={"Me!".split("")}
            letterClass={letterClass}
            offset={8}
            spanStyle={"space"}
          />
        </h1>
        <p>For any Queries, feel free to contact me using the below form!</p>
        <form onSubmit={handleSubmit}>
          <div className="firstRow">
            <input type={"text"} placeholder="Name" name="name" />
            <input type={"email"} placeholder="E-mail" name="email" />
          </div>
          <div className="remainingFields">
            <input type={"text"} placeholder="Subject" name="subject" />
            <textarea placeholder="Message" />
            <button type="submit">Send!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactpage;
