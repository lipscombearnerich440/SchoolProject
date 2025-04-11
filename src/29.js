const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.listen(3000);
