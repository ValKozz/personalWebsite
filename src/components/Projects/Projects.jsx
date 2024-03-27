import ButtonMenu from "./ButtonMenu/ButtonMenu";
import CanvasThreeFiber from "./ThreeFiber/CanvasThreeFiber";
import "./projects.css";

export default function Projects() {
  const project_menu = <></>;
  const toggled = false;

  function toggleMenu() {
    if (!toggled) {
      toggled = true;
      project_menu = (
        <>
          <h1>Test, bro</h1>
        </>
      );
    } else {
      toggled = false;
      project_menu = <></>;
    }
  }

  return (
    <section className="scroller light">
      <div className="main light">
        <div className="half light">
          <div id="canvas3d-container" className="light">
            <CanvasThreeFiber id="canvas3d" />
          </div>
        </div>
        <div className="half content light" id="projects-cont">
          <div id="expand-panel">
            <button toggle="projects" onClick={toggleMenu}>
              {"<-"}
            </button>
            <div>{project_menu}</div>
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
    </section>
  );
}
