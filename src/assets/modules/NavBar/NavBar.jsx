import { useState } from "react";
import "./NavBar.css";

function Navbar(props) {
    const [query,setQuery] = useState("");
  const handleSearch = () => {
  if (query.trim()) {
    props.searchFilmByName(query);
  }
};

  return (
    <nav className="navbar">
      <div className="navbar-logo">🎥 MyMovies</div>

      <ul className="navbar-links">
        <li><a href="/">Movies</a></li>
        <li>
  <button className="navbar-link" onClick={props.fetchPopularSeries}>
    Series
  </button>
</li>

        <li><a href="/top">Top 10</a></li>
        <li><a href="/about">À propos</a></li>
      </ul>
    
      <div className="navbar-search" >
        <input type="text" id="qr"  value={query}
  onChange={(e) => setQuery(e.target.value)}  placeholder="Rechercher un film..." />
        <button onClick={handleSearch} >🔍</button>
      </div>
    </nav>
  );
}

export default Navbar;
