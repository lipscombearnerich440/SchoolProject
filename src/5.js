// Example code for a Node.js project

const http = require('http');
const fs = require('fs');

// Set up the HTTP server
const port = 3000;
http.createServer((req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    let filePath = req.url;
    if (filePath === '/') {
      filePath = '/index.html';
    }
    fs.readFile(`${__dirname}/public${filePath}`, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  }
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
