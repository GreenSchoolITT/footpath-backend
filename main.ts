const express = require('express');
const bodyParser = require('body-parser');
const main = express();
const port: number = 2000;

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

main.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

main.get('/', (req, res) => {
  res.sendFile('./pages/index.html', {root: __dirname});
});

main.get("/ph", (req, res) => {
  res.sendFile("./pages/ph.html", {root: __dirname});
});

main.get('/css/style.css', (req, res) => {
  res.sendFile('./pages/css/style.css', {root: __dirname});
});

main.get('/js/script.js', (req, res) => {
  res.sendFile('./pages/js/script.js', {root: __dirname});
});

main.post('/', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});