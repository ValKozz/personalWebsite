import "./projectCards.css";
import Card from "./Card";
import data from "./data.json";

export default function ProjectCards() {
  return (
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
  );
}
