import "./projectCards.css";
import Card from "./Card";
import data from "./data.json";

export default function ProjectCards(props) {
  return (
    <div className="drawer-container">
      <div className="card-container">
        {data.map(function (project) {
          return (
            <Card
              key={project.name}
              title={project.name}
              link={project.link}
              text={project.desc}
              img_source={project.img_source}
            />
          );
        })}
      </div>
      <div className="btn-container" onClick={(e) => props.onClick(e)}>
        <button>{"<"}</button>
      </div>
    </div>
  );
}
