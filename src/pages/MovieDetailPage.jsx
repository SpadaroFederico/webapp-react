import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewList from '../components/ReviewList';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5174/movies/${id}`) // Backend sulla porta 5174
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));

    axios.get(`http://localhost:5174/reviews?movie_id=${id}`) // Backend sulla porta 5174
      .then(response => setReviews(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie) return <div>Caricamento...</div>;

  return (
    <div className="container mt-4">
      <h1>{movie.title}</h1>
      <p><strong>Regista:</strong> {movie.director}</p>
      <p><strong>Genere:</strong> {movie.genre}</p>
      <p><strong>Anno:</strong> {movie.release_year}</p>
      <p><strong>Trama:</strong> {movie.abstract}</p>
      <h2>Recensioni</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default MovieDetailPage;