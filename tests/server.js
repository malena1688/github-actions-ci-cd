const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor de producción corriendo en el puerto ${PORT}`);
});
