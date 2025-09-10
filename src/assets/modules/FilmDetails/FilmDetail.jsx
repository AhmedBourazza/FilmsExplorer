import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./FilmDetail.css";

function FilmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=569c2bad3f7135cafe65f1ad1885cab7&language=fr-FR`
        );
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du film :", error);
      }
    };
    fetchFilm();
  }, [id]);

  if (!film) return <p className="loading">Chargement...</p>;

  return (
    <div
      className="film-detail"
      style={{
        backgroundImage: film.backdrop_path
          ? `url(https://image.tmdb.org/t/p/w1280${film.backdrop_path})`
          : "none",
      }}
    >
      <div className="overlay"></div>

      <div className="film-detail-content">
      

        <div className="film-detail-main">
          <img
            className="film-detail-poster"
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
          />

          <div className="film-detail-info">
            <h1>{film.title}</h1>
            {film.tagline && <h3 className="tagline">{film.tagline}</h3>}
            <p><strong>Date de sortie :</strong> {film.release_date}</p>
            <p><strong>Note :</strong> ⭐ {film.vote_average} / 10 ({film.vote_count} votes)</p>
            <p><strong>Durée :</strong> {film.runtime} min</p>
            <p><strong>Status :</strong> {film.status}</p>
            <p><strong>Genres :</strong> {film.genres.map(g => g.name).join(", ")}</p>
            <p><strong>Budget :</strong> {film.budget.toLocaleString()} $</p>
            <p><strong>Recettes :</strong> {film.revenue.toLocaleString()} $</p>
            {film.production_companies.length > 0 && (
              <p><strong>Compagnies :</strong> {film.production_companies.map(c => c.name).join(", ")}</p>
            )}
            {film.homepage && (
              <p><strong>Site officiel :</strong> <a href={film.homepage} target="_blank" rel="noopener noreferrer">{film.homepage}</a></p>
            )}
            <p className="overview">{film.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
