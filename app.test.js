const app = require('./app');
const supertest = require('supertest');

const request = supertest(app);

describe('/test endpoint', () => {
  test('Debe devolver un Hola Mundo', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('¡Hola mundo!');
  });
});
