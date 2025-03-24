let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
