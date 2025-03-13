import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [name, setName] = useState('');
  const [vote, setVote] = useState(1);
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/movies/${id}/reviews`, {
        name,
        vote,
        text,
      });
      alert(response.data.message);
      // Ricarica i dettagli del film per mostrare la nuova recensione
      const movieResponse = await axios.get(`http://localhost:3000/movies/${id}`);
      setMovie(movieResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      {/* Dettagli del film */}
      <h2>Aggiungi una recensione</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vote" className="form-label">Voto (1-5)</label>
          <input
            type="number"
            className="form-control"
            id="vote"
            value={vote}
            onChange={(e) => setVote(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Recensione</label>
          <textarea
            className="form-control"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Invia</button>
      </form>
    </div>
  );
};

export default MovieDetail;