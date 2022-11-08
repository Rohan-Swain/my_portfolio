import gsap from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import React, { useEffect, useRef } from "react";
import "./index.scss";

function HomepageLogo() {
  const pathRef1 = useRef();
  const pathRef2 = useRef();
  const pathRef3 = useRef();
  const pathRef4 = useRef();
  const pathRef5 = useRef();
  const pathRef6 = useRef();
  const pathRef7 = useRef();
  const circleRef1 = useRef();
  const circleRef2 = useRef();
  const circleRef3 = useRef();
  const circleRef4 = useRef();
  const circleRef5 = useRef();
  const circleRef6 = useRef();
  const circleRef7 = useRef();
  const circleRef8 = useRef();
  const logoArr = [
    [pathRef1, pathRef2, pathRef3, pathRef4, pathRef5, pathRef6],
    [
      circleRef1,
      circleRef2,
      circleRef3,
      circleRef4,
      circleRef5,
      circleRef6,
      circleRef7,
      circleRef8,
    ],
  ];

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    logoArr[0].map((item) =>
      gsap
        .timeline()
        .fromTo(item.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 10 })
    );

    gsap
      .timeline()
      .fromTo(
        pathRef7.current,
        { drawSVG: 0 },
        { drawSVG: "59.55%", duration: 2 }
      );

    logoArr[1].map((item) =>
      gsap
        .timeline()
        .fromTo(item.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 2 })
    );

    fill();
  }, []);

  const fill = () => {
    setTimeout(
      () => document.querySelector(".rect").classList.add("fillColor"),
      2500
    );
    return undefined;
  };

  return (
    <div id="homepageLogo">
      <svg
        width="98.304237"
        height="106.26083"
        viewBox="0 0 26.009663 28.114845"
        version="1.1"
        id="svg5"
      >
        <defs id="defs2" />
        <g id="g9757" transform="translate(-36.009662)">
          <g id="g9729">
            <circle
              ref={circleRef1}
              id="path231-1"
              cx="37.100784"
              cy="1.0911199"
              r="0.85961211"
            />
            <circle
              ref={circleRef2}
              id="path231-3-5"
              cx="37.100784"
              cy="15.374453"
              r="0.85961223"
            />
            <circle
              ref={circleRef3}
              id="path231-7-2"
              cx="41.896114"
              cy="11.883059"
              r="0.93244457"
            />
            <circle
              ref={circleRef4}
              id="path231-2-1"
              cx="41.938919"
              cy="3.9743369"
              r="0.88963938"
            />
            <circle
              ref={circleRef5}
              id="path231-6-9"
              cx="56.306915"
              cy="8.2271214"
              r="0.90075099"
            />
            <circle
              ref={circleRef6}
              id="path231-28-89-3"
              cx="41.677956"
              cy="18.785257"
              r="0.85961211"
            />
            <circle
              ref={circleRef7}
              id="path231-6-2-0-2"
              cx="60.88707"
              cy="26.982584"
              r="0.90075099"
            />
            <circle
              ref={circleRef8}
              id="path231-28-3-6"
              cx="55.617218"
              cy="24.327982"
              r="0.85961211"
            />
          </g>
          <g id="g9738">
            <path
              ref={pathRef1}
              d="M 37.100784,3.00906 V 13.06323 Z"
              id="path2490-6"
            />
            <path
              ref={pathRef2}
              d="m 43.886891,3.97434 4.022165,0.0214 c 0,0 4.242896,-0.28325 4.233333,4.0114 -0.0096,4.29465 -4.233333,3.93272 -4.233333,3.93272 l -4.022163,-0.0568 4.022163,0.0568 c 0,0 4.233333,0.274326 4.233333,-3.93272 0,-4.2255317 -4.233333,-4.0114 -4.233333,-4.0114 z"
              id="path2590-1"
            />
            <path
              ref={pathRef3}
              d="m 39.01873,1.09112 c 0,0 11.570113,-0.16913 13.098351,0.0786 1.528238,0.24779 3.015747,1.31809 3.620547,2.63368 0.6048,1.31559 0.569287,2.46459 0.569287,2.46459 0,0 2.52e-4,-1.4781198 -0.569287,-2.46459 C 54.811317,2.1989816 53.336391,1.2138428 52.117081,1.16972 49.455822,1.0734178 39.01873,1.09112 39.01873,1.09112 Z"
              id="path8030-7"
            />
            <path
              ref={pathRef4}
              d="M 59.822283,24.78492 52.958484,13.77616 c 1.138167,-0.59481 2.728815,-2.18585 2.963629,-3.501 0,0 -0.144509,1.009611 -1.05315,1.918252 -0.903564,0.903564 -1.910479,1.582748 -1.910479,1.582748 z"
              id="path8934-7"
            />
            <path
              ref={pathRef5}
              d="m 43.902597,18.78526 h 3.935775 l 5.967415,8.21919 h 4.598255 -4.598255 l -5.967415,-8.21919 z"
              id="path9062-1"
            />
            <path
              ref={pathRef6}
              d="M 39.547897,15.37445 H 49.75744 l 4.767872,7.34165 -4.767872,-7.34165 z"
              id="path9064-7"
            />
            <path
              ref={pathRef7}
              id="rectangle"
              className="rect"
              d="m 38.339699,17.10935 0.864403,-0.0216 c 0.499956,-0.0125 0.180489,1.95367 0.625891,2.6522 0.445402,0.69852 1.550728,0.69674 1.550728,1.28434 v 5.93863 h -4.326007 v -9.3917 c 0.463624,-0.06391 0.889424,-0.129739 1.284985,-0.4619 z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default HomepageLogo;