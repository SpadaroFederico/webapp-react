import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Importa useParams
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams(); // Ottieni l'ID del film dall'URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      <div className="movie-header">
        <img src={`/images/${movie.image}`} alt={movie.title} />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>Regista: {movie.director}</p>
          <p>Genere: {movie.genre}</p>
          <p>Anno di uscita: {movie.release_year}</p>
          <p>{movie.abstract}</p>
        </div>
      </div>

      <div className="reviews-list">
        <h2>Recensioni</h2>
        {movie.reviews && movie.reviews.length > 0 ? (
          movie.reviews.map(review => (
            <div key={review.id} className="review-card">
              <strong>{review.name}</strong> - Voto: {review.vote}
              <p>{review.text}</p>
            </div>
          ))
        ) : (
          <p>Nessuna recensione disponibile.</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;