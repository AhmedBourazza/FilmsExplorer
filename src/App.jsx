import React,{useState,useEffect} from 'react';
import './App.css'
import FilmList from './assets/modules/FilmList/FilmList'
import Navbar from './assets/modules/NavBar/NavBar'

function App() {
    const [films,setFilms] =useState([]);
  const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=569c2bad3f7135cafe65f1ad1885cab7&language=fr-FR&page=1"
    );
    const data = await response.json();
    setFilms(data.results)
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
  }
};

    async function  searchFilmByName(name) {
      console.log("2 input est "+name)
        const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=569c2bad3f7135cafe65f1ad1885cab7&language=fr-FR&query=${name}
}`
    );
        const resultat =await response.json(); 
        console.log("les resultat "+ resultat.results)
        setFilms(resultat.results)

        
    }
     useEffect(() => {
    fetchPopularMovies();
  }, []); // [] => exécuté seulement au montage du composant

  return (
    <>
    <Navbar searchFilmByName={searchFilmByName} />
    <FilmList films = {films}/>
    </>
  )
}

export default App
