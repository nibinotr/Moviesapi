// 


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3007;

// Import routes
const movieRoutes = require('./routes/movieRoutes');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the movie routes
app.use('/movies', movieRoutes);

// Root route
app.get('/', (req, res) => {
  res.send("Welcome to the Movies API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


