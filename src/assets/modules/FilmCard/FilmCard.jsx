import "./FilmCard.css";
import pic01 from "../../images/inception.jpg";

function FilmCard(props) {
  return (
    <div className="film-card">
      <img src={props.image} alt="Film" />
      <div className="film-info">
        <h2>{props.title}</h2>
        <p>{props.pop}</p>
      </div>
    </div>
  );
}

export default FilmCard;
