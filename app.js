const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: '¡Hola mundo!'
  });
});

module.exports = app;