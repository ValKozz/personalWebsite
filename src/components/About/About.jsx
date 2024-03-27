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
                many things, Design, AI and 3D Graphics among them. Current main
                focus is on Python and React.
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
