const express = require('express');
const port = 5000;
const cors = require('cors');
const db = require('./config/db');
const app = express();

db.connect();
const routes = require('./routes/index');

app.use('/api', cors({ origin: "*" }), routes)

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});