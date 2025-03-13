import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1>{movie.title}</h1>
      <p>Regista: {movie.director}</p>
      <p>Genere: {movie.genre}</p>
      <p>Anno di uscita: {movie.release_year}</p>
      <p>{movie.abstract}</p>
      <h2>Recensioni</h2>
      <ul className="list-group">
        {movie.reviews.map(review => (
          <li key={review.id} className="list-group-item">
            <strong>{review.name}</strong> - Voto: {review.vote}
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;