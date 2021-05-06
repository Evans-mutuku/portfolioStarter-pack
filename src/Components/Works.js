import React from "react";
import "./../index.css";
import amazon from "../Images/amazon.png";
import breaking from "../Images/breaking-bad.png";

const Works = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="works"
      id="works"
    >
      <h3 className="heading">Check-out some of my works in github</h3>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <a href="https://github.com/Evans-mutuku/Amazon-clone.git"><img src={amazon} alt="" /></a>
            
            <p>Amazon-clone app</p>
          </li>
        </div>
        <div className="services">
          <li>
            <a href="https://github.com/Evans-mutuku/Breaking-bad-show.git"><img src={breaking} alt="" /></a>
            
            <p>Breaking-bad app</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Works;
