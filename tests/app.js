const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: '¡Hola mundo!'
  });
});

module.exports = app; // Muy importante para que Supertest pueda leerlo
