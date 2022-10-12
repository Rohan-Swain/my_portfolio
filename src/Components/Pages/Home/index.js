import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Homepage() {
  return (
    <div className="container homepage">
      <div className="textarea">
        <h1>
          HI!
          <br />
          I'm Rohan
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer | React Developer</h2>
        <a href="">See My Resume</a>
      </div>
    </div>
  );
}

export default Homepage;
