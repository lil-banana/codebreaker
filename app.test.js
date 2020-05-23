const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

test('gets the guess endpoint', async done => {
  const response = await request.get('/guess?newCode=1234'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('xxxx');
  done();
}) 