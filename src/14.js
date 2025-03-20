// Create a new express server
const express = require('express');
const app = express();

// Set up a route to handle GET requests at /
app.get('/', (req, res) => {
  // Return a random integer between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Respond with the random number
  res.send(`Random number: ${randomNumber}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
