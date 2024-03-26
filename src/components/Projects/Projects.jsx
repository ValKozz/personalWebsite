import CanvasThreeFiber from "./ThreeFiber/CanvasThreeFiber";
import "./projects.css";

export default function Projects() {
  return (
    <div className="main light">
      <div className="half">
        <div id="canvas3d-container" className="light">
          <CanvasThreeFiber id="canvas3d" />
        </div>
      </div>
      <div className="half content light">
        <button>{"<-"}</button>
        <div id="title">
          <h1 className="sectionTitle" id="hover-title">
            <a href="https://github.com/ValKozz">Projects</a>
          </h1>
          <div id="text-area">
            <p>This is where I'd put my 3D projects IF I HAD ANY!!!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
