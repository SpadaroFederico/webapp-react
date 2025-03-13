import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Lista dei Film</h1>
      <ul className="list-group">
        {movies.map(movie => (
          <li key={movie.id} className="list-group-item">
            <a href={`/api/movies/${movie.id}`}>{movie.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;