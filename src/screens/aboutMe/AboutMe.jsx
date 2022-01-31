import React from "react";
import "./aboutMe.css";
import person from "../../images/my.jpeg";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={person} alt="person icon" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          Organized and detail-oriented graduate from the Govind Ballabh Pant
          Institute of Engineering looking for an entry-level position as a Web
          Developer.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
