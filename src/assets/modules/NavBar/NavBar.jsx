import { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
    const [query,setQuery] = useState();
  const handleSearch = ()=>{
    const input = document.getElementById("qr").value;
    console.log("l input est "+input)
    props.searchFilmByName(input);
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎥 MyMovies</div>

      <ul className="navbar-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/popular">Populaires</a></li>
        <li><a href="/top">Top 10</a></li>
        <li><a href="/about">À propos</a></li>
      </ul>
    
      <div className="navbar-search" >
        <input type="text" id="qr"  placeholder="Rechercher un film..." />
        <button onClick={handleSearch} >🔍</button>
      </div>
    </nav>
  );
}

export default Navbar;
