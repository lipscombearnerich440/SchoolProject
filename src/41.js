// In your Node.js environment:

const express = require('express');
const app = express();
app.use(express.json());

app.post('/add', (req, res) => {
  const { name } = req.body;
  
  // Logic to add the name to the database
  
  res.status(201).send({ message: 'Name added successfully' });
});

app.listen(3000);
