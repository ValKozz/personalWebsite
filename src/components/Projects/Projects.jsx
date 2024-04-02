import { useState } from "react";
import ProjectCards from "./ProjectCards/ProjectCards";
import CanvasThreeFiber from "./ThreeFiber/CanvasThreeFiber";
import "./projects.css";

export default function Projects() {
  const [btnState, setState] = useState(true);

  const changeState = () => {
    setState(!btnState);
    console.log("state is " + btnState);
  };

  return (
    <section className="scroller light">
      <div className="main light">
        <div className="main projects-container">
          <div className="half light animated">
            <div id="canvas3d-container" className="light">
              <CanvasThreeFiber id="canvas3d" />
            </div>
            <div
              id="drawer"
              className={`${btnState ? "isClosed" : "isOpen"} light`}
            >
              <ProjectCards onClick={setState} />
            </div>
          </div>
          <div className="half content light" id="projects-cont">
            <div id="expand-panel">
              <button
                id="panel-btn"
                className={`${btnState ? "isClosed" : "isOpen"}`}
                onClick={changeState}
              >
                {"<->"}
              </button>
            </div>
            <div id="title">
              <h1 className="sectionTitle" id="hover-title">
                <a href="https://github.com/ValKozz">Projects</a>
              </h1>
              <div id="text-area">
                <p>Check out my Projects or visit my GitHub page!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
