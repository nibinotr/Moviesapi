const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovieRating,
  deleteMovie
} = require('../controllers/movieController');

// Define routes
router.get('/', getAllMovies);            // GET /movies
router.get('/:id', getMovieById);         // GET /movies/:id
router.post('/', addMovie);               // POST /movies
router.patch('/:id', updateMovieRating);  // PATCH /movies/:id
router.delete('/:id', deleteMovie);       // DELETE /movies/:id

module.exports = router;
