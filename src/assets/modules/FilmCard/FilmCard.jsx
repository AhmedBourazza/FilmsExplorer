import "./FilmCard.css";
import pic01 from "../../images/inception.jpg";

function FilmCard() {
  return (
    <div className="film-card">
      <img src={pic01} alt="Film" />
      <div className="film-info">
        <h2>Inception</h2>
        <p>Un voleur infiltre les rêves pour voler des secrets...</p>
      </div>
    </div>
  );
}

export default FilmCard;
