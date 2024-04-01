import "./projectCards.css";
import Card from "./Card";

export default function ProjectCards() {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolorem dicta consequatur! Nulla ab expedita provident possimus impedit iusto saepe!";

  return (
    <div className="card-container">
      <Card title={"Cows and Bulls"} text={content} link="https://google.com" />
      <Card title={"Test"} text={content} img_source={false} />
      <Card title={"Test"} text={content} img_source={false} />
      <Card title={"Test"} text={content} img_source={false} />
      <Card title={"Test"} text={content} img_source={false} />
      <Card title={"Test"} text={content} img_source={false} />
    </div>
  );
}
