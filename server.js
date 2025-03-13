import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 5174;

// Configurazione del database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'ApologizE1975!1', 
  database: 'db_movies',
});

// Middleware per CORS e parsing JSON
app.use(cors());
app.use(express.json());

// Endpoint per ottenere tutti i film
app.get('/movies', (req, res) => {
  connection.query('SELECT * FROM movies', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Errore del server' });
    }
    res.json(results);
  });
});

// Endpoint per ottenere i dettagli di un film
app.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  connection.query('SELECT * FROM movies WHERE id = ?', [movieId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Errore del server' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Film non trovato' });
    }
    res.json(results[0]);
  });
});

// Endpoint per ottenere le recensioni di un film
app.get('/reviews', (req, res) => {
  const movieId = req.query.movie_id;
  connection.query('SELECT * FROM reviews WHERE movie_id = ?', [movieId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Errore del server' });
    }
    res.json(results);
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server backend in ascolto su http://localhost:${port}`);
});