import React from "react";
import "./index.scss";

function Container({ hoverClass, projectArray, offset }) {
  return (
    <ul className="projects">
      {projectArray.map((item, index) => (
        <li key={index} className={`logo ${hoverClass} o${offset + index}`}>
          <a target={"_blank"} rel="noreferrer" href={item.liveLink}>
            <img src={item.src} alt={item.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Container;
