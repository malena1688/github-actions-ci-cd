const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: '¡Hola Universo!'
  });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

module.exports = app;