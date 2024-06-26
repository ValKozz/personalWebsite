import React from "react";
import "./about.css";
import prof_pic from "../../assets/prof2.jpg";

export default function About() {
  return (
    <section className="scroller">
      <div className="main light">
        <div className="half content light">
          <div id="section-container">
            <div id="about-title">
              <h1 className="sectionTitle" id="hover-title">
                About Me
              </h1>
            </div>
            <div id="text-area">
              <p className="about-overview">
                I am an aspiring Python Developer with branching interests -
                Design, AI and Linux systems among them. Current main focus is
                on Python and React. I have experience in Computer Hardware
                including a professional diploma in Computer Hardware
                Technology. Looking to branch out into Software Development.
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
