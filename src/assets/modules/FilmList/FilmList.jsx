import FilmCard from "../FilmCard/FilmCard";
import "./FilmList.css";
import pic01 from "../../images/inception.jpg";
import React,{useState,useEffect} from "react";
function FilmList() {
  const [films,setFilms] =useState([]);
const fetchMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=569c2bad3f7135cafe65f1ad1885cab7&language=fr-FR&page=1`
    );
    const data = await response.json();
    console.log("Données reçues :", data.results);
    setFilms(data.results)
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
  }
};

useEffect(() => {
  fetchMovies();
}, []);


  return (
    <div className="film-list">
      {films.map(film => (
        <FilmCard key={film.id} title={film.original_title} pop={film.popularity} image={"https://image.tmdb.org/t/p/w500"+film.poster_path} />
      ))}
    </div>
  );
}

export default FilmList;
