// Create a new Express app
const express = require('express');
const app = express();

// Set up a route for the root URL
app.get('/', (req, res) => {
  // Render an HTML page that says "Hello World!"
  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
