require('./index');
const request = require('supertest')

test('that the http version works', () => {
  request('localhost:8080').get('/');
});