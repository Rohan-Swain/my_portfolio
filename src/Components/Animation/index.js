import "./index.scss";
import React from "react";

function AnimatedLetter({ letterArr, letterClass, offset, spanStyle }) {
  return (
    <span className={spanStyle}>
      {letterArr.map((letter, index) => {
        return (
          <span key={index} className={`${letterClass} _${index + offset}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetter;
