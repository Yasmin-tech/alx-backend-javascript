//  Create a small HTTP server using Node's HTTP module

const { createServer } = require('http');

const port = 1245;
const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
