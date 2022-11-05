import React, { useState } from "react";
import "./index.scss";
import AnimatedLetter from "../../Animation";
import ContactLogo from "./ContactLogo";

function Contactpage() {
  const [letterClass, setLetterClass] = useState("letters");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  setTimeout(() => setLetterClass("letters-hover"), 1500);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mail = document.createElement("a");
    mail.href = `mailto:rohanswain2003@gmail.com?subject=${subject
      .split(" ")
      .join("%20")}&body=${name.split(" ").join("%20")}%0D%0D${email
      .split("@")
      .join("%40")}%0D%0D${message.split(" ").join("%20")}`;
    mail.click();
  };

  return (
    <div className="container contactpage">
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
            <input
              type={"text"}
              placeholder="Name"
              name="name"
              onChange={handleName}
            />
            <input
              type={"email"}
              placeholder="E-mail"
              name="email"
              onChange={handleEmail}
            />
          </div>
          <div className="remainingFields">
            <input
              type={"text"}
              placeholder="Subject"
              name="subject"
              onChange={handleSubject}
            />
            <textarea placeholder="Message" onChange={handleMessage} />
            <button type="submit">Send!</button>
          </div>
        </form>
      </div>
      <ContactLogo />
    </div>
  );
}

export default Contactpage;
