import React from "react";
import "./index.scss";
import ProjectLogo from "../../assets/images/denoise.png";

function Container() {
  return (
    <>
      <div className="bgGraphic" />
      <div className="projectsContainer">
        <ul>
          <li>
            <div className="pc _1">
              <img src={ProjectLogo} />
              <h2>Project</h2>
              <p>Lorem ipsum dolar lamet....</p>
            </div>
          </li>
          <li>
            <div className="pc _2">
              <img src={ProjectLogo} />
              <h2>Project</h2>
              <p>Lorem ipsum dolar lamet....</p>
            </div>
          </li>
          <li>
            <div className="pc _3">
              <img src={ProjectLogo} />
              <h2>Project</h2>
              <p>Lorem ipsum dolar lamet....</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Container;
