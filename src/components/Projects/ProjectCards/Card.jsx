import "./card.css";

export default function Card({ title, text, img_source, link }) {
  return (
    <a href={link}>
      <div className="card">
        <div className="card-title">
          <h1 id="card-h1">{title}</h1>
        </div>
        <div className="card-content">
          {img_source ? <img className="card-image" src={img_source} /> : ""}
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
}
