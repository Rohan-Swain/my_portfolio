import "./index.scss";
import React from "react";

function AnimatedLetter({ letterArr, letterClass, offset, spanStyle }) {
  const HandleHover = (id) => {
    const elem = document.querySelector(`._${id}`).classList;
    elem.add("animate");
    setTimeout(() => elem.remove("animate"), 500);
  };

  return (
    <span className={spanStyle}>
      {letterArr.map((letter, index) => {
        return (
          <span
            key={index}
            onMouseOver={() => {
              HandleHover(index + offset);
            }}
            className={`${letterClass} _${index + offset}`}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetter;
