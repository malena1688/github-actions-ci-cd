const request = require('supertest');
const app = require('./app');

test('GET / debería responder con 200 y ¡Hola mundo!', async () => {
  const response = await request(app).get('/');
  
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ message: '¡Hola mundo!' });
});
