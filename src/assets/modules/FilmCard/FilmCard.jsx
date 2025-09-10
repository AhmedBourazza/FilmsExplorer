import { Link } from "react-router-dom";

import "./FilmCard.css";

function FilmCard(props) {
  return (
    <div  className="film-card">
<Link to={`/film/${props.id}`}>
      <img src={props.image} alt="Film" />
      <div className="film-info">
        <h2>{props.title}</h2>
        <p> ⭐{props.pop}</p>
      </div>
      
</Link>
        </div>

  );
}

export default FilmCard;
