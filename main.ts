const express = require('express');
const app = express();
let port: number;
port = 80;

app.listen(port, () => {
  console.log(`My first Express.js web application listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile("./html/index.html", {root: __dirname});
});

app.get('/test', (req, res) => {
  res.send('2');
});