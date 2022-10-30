import React from "react";
import "./index.scss";

function Container({ hoverClass, projectArray, offset }) {
  return (
    <ul className="projects">
      {projectArray.map((item, index) => (
        <li key={index} className={`logo ${hoverClass} o${offset + index}`}>
          <img src={item.src} alt={item.alt} />
        </li>
      ))}
    </ul>
  );
}

export default Container;
