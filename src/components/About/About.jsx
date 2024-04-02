import React from "react";
import "./about.css";
import prof_pic from "../../assets/prof2.jpg";

export default function About() {
  return (
    <section className="scroller">
      <div className="main light">
        <div className="half content light">
          <div id="section-container">
            <div>
              <h1 className="sectionTitle" id="hover-title">
                About Me
              </h1>
            </div>
            <div id="text-area">
              <p>
                I am an asparing Python Developer with branching interests in
                many things, Design, AI, 3D Graphics and Linux systems among
                them. Current main focus is on Python and React. I have
                extensive expierince in hardware and integrated systems to a
                point as well as a Computer Hardware and Technology professional
                Diploma. Looking to branch out into Software Development and
                Automation.
              </p>
            </div>
          </div>
        </div>
        <div className="half light">
          <div id="mypic">
            <img src={prof_pic} alt="Me"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
