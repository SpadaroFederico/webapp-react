import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Usa Link invece di <a>
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-container">
      <h1>Lista dei Film</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={`/images/${movie.image}`} alt={movie.title} />
            <h3>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link> {/* Usa Link */}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;