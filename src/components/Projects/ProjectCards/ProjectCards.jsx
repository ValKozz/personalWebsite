import "./projectCards.css";
import Card from "./Card";
import data from "./data.json";

export default function ProjectCards(btnState, setState) {
  const changeState = () => {
    setState(!btnState);
    console.log("state is " + btnState);
  };

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
      <div className="close-card-container">
        <button onClick={changeState}>{"<-"}</button>
      </div>
    </div>
  );
}
