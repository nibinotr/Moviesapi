// Sample movie data
let movies = [
  { id: 1, title: 'The Terminator', genre: 'Action, Sci-Fi', releaseYear: 1984, rating: 8.0 },
  { id: 2, title: 'The Pursuit of Happyness', genre: 'Biography, Drama', releaseYear: 2006, rating: 8.0 },
  { id: 3, title: 'I, Robot', genre: 'Action, Sci-Fi, Thriller', releaseYear: 2004, rating: 7.1 }
  ];
  
  // Get all movies
  const getAllMovies = (req, res) => {
    res.json(movies);
  };
  
  // Get a movie by ID
  const getMovieById = (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  };
  
  // Add a new movie
  const addMovie = (req, res) => {
    const { title, genre, releaseYear, rating } = req.body;
    if (!title || !genre || !releaseYear || !rating) {
      return res.status(400).json({ message: 'All movie details are required' });
    }
  
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
    const newMovie = { id: newId, title, genre, releaseYear, rating };
    movies.push(newMovie);
    res.status(201).json(newMovie);
  };
  
  // Update a movie rating by ID
  const updateMovieRating = (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
  
    const { rating } = req.body;
    if (!rating) {
      return res.status(400).json({ message: 'Rating is required to update' });
    }
  
    movie.rating = rating;
    res.json(movie);
  };
  
  // Delete a movie by ID
  const deleteMovie = (req, res) => {
    const movieId = parseInt(req.params.id);
    const movieIndex = movies.findIndex(m => m.id === movieId);
    if (movieIndex === -1) {
      return res.status(404).json({ message: 'Movie not found' });
    }
  
    movies.splice(movieIndex, 1);
    res.status(204).send();
  };
  
  module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovieRating,
    deleteMovie
  };
  