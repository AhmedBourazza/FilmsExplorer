import FilmCard from "../FilmCard/FilmCard";
import "./FilmList.css";
import pic01 from "../../images/inception.jpg";
import React,{useState,useEffect} from "react";
function FilmList(props) {





  return (
    <div  className="film-list">
      {props.films.map(film => (
        <FilmCard  key={film.id} title={film.original_title} pop={film.popularity} image={"https://image.tmdb.org/t/p/w500"+film.poster_path} />
      ))}
    </div>
  );
}

export default FilmList;
