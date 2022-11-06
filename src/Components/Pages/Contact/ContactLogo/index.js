import "./index.scss";
import gsap from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { useRef } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function ContactLogo() {
  const messageBoxOutlineRef = useRef();
  const messageBoxOutlineRef2 = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .fromTo(
        messageBoxOutlineRef.current,
        {
          drawSVG: 0,
        },
        {
          drawSVG: "100%",
          duration: 1.5,
          delay: 1.5,
        }
      )
      .fromTo(
        messageBoxOutlineRef2.current,
        {
          drawSVG: 0,
        },
        {
          drawSVG: "100%",
          duration: 1.5,
          delay: 1.8,
        }
      );

    dropShadow();
  }, []);

  const dropShadow = () => {
    setTimeout(
      () => messageBoxOutlineRef.current.classList.add("dropShadow"),
      3000
    );

    setTimeout(
      () => messageBoxOutlineRef2.current.classList.add("dropShadow"),
      6300
    );
    return undefined;
  };

  return (
    <div id="contactLogo">
      <svg
        width="76.990646mm"
        height="54.215435mm"
        viewBox="0 0 80 60"
        version="1.1"
        id="messageSVG"
      >
        <g id="layer1" transform="translate(-68.5,-60)">
          <g id="first-message-box">
            <path
              ref={messageBoxOutlineRef}
              className="whiteStroke"
              id="message-box-outline1"
              d="m 88.660429,111.59358 28.937911,0.0459 c 2.58374,0 3.44246,-1.46691 3.44246,-3.66249 l 0.0727,-21.734616 c 0,-2.12361 -1.14995,-3.23428 -3.40249,-3.23428 l -44.590907,-0.0265 c -1.780546,0 -2.984476,1.13498 -2.984476,2.96845 l -0.0073,22.756776 c 0,1.55963 1.576675,2.92919 3.373934,2.92919 l 5.227241,-0.0286 c 1.032069,0 1.057128,0.004 0.947306,1.19716 l -0.294297,3.66863 c 0,0.51712 0.315761,0.59944 0.709063,0.37236 l 7.606326,-5.00709 c 0.369523,-0.23675 0.395342,-0.24491 0.962526,-0.24491 z"
            />
            <path
              className="message-content"
              id="heading1"
              d="m 99.110505,89.481097 c 0.64016,0 1.159105,-0.51895 1.159105,-1.159105 0,-0.640156 -0.518945,-1.159105 -1.159105,-1.159105 H 76.277458 c -0.640156,0 -1.159105,0.518949 -1.159105,1.159105 0,0.640155 0.518949,1.159105 1.159105,1.159105 z"
            />
            <path
              className="message-content"
              id="heading2"
              d="m 113.37553,89.481097 c 0.64016,0 1.15911,-0.51895 1.15911,-1.159105 0,-0.640156 -0.51895,-1.159105 -1.15911,-1.159105 h -10.13305 c -0.64016,0 -1.15911,0.518949 -1.15911,1.159105 0,0.640155 0.51895,1.159105 1.15911,1.159105 z"
            />
            <path
              className="message-content"
              id="first-line"
              d="m 113.37553,97.22705 c 0.64016,0 1.15911,-0.51895 1.15911,-1.159105 0,-0.640156 -0.51895,-1.159105 -1.15911,-1.159105 H 76.277458 c -0.640156,0 -1.159105,0.518949 -1.159105,1.159105 0,0.640155 0.518949,1.159105 1.159105,1.159105 z"
            />
            <path
              className="message-content"
              id="second-line"
              d="m 113.37553,101.79801 c 0.64016,0 1.15911,-0.51895 1.15911,-1.15911 0,-0.640157 -0.51895,-1.159107 -1.15911,-1.159107 H 76.277457 c -0.640156,0 -1.159105,0.51895 -1.159105,1.159107 0,0.64016 0.518949,1.15911 1.159105,1.15911 z"
            />
            <path
              className="message-content"
              id="third-line"
              d="m 113.37553,106.36899 c 0.64016,0 1.15911,-0.51896 1.15911,-1.15912 0,-0.64016 -0.51895,-1.15911 -1.15911,-1.15911 H 76.277457 c -0.640156,0 -1.159105,0.51895 -1.159105,1.15911 0,0.64016 0.518949,1.15912 1.159105,1.15912 z"
            />
          </g>
          <g id="second-message-box">
            <path
              ref={messageBoxOutlineRef2}
              className="whiteStroke"
              id="message-box-outline2"
              d="M 131.98544,76.04525 119.51115,76.082 c -2.06887,0 -2.75647,-1.174593 -2.75647,-2.93265 l -0.0582,-7.492975 c 0,-1.700428 0.92079,-2.58977 2.72446,-2.58977 l 25.00804,-0.02122 c 1.42573,0 2.38975,0.908808 2.38975,2.376914 l 0.006,8.311445 c 0,1.248835 -1.26249,2.345477 -2.7016,2.345477 l -4.18558,-0.0229 c -0.82641,0 -0.84647,0.0032 -0.75854,0.958597 l 0.23566,2.937566 c 0,0.414071 -0.25284,0.479987 -0.56777,0.298158 l -6.09058,-4.009305 c -0.29588,-0.189572 -0.31656,-0.196106 -0.77072,-0.196106 z"
            />
            <g id="circleGroup">
              <circle
                id="first-circle"
                cx="126.06516"
                cy="69.334076"
                r="1.716215"
              />
              <circle
                id="second-circle"
                cx="131.717"
                cy="69.334076"
                r="1.716215"
              />
              <circle
                id="third-circle"
                cx="137.36877"
                cy="69.334076"
                r="1.716215"
              />
            </g>
          </g>
        </g>
      </svg>
      <a id="email-span" href="mailto:abcd@gmail.com">
        <span>
          <FontAwesomeIcon id="atLogo" icon={faAt} />
          abcd@gmail.com
        </span>
      </a>
    </div>
  );
}

export default ContactLogo;
