const index = require('./index');
const request = require('supertest');


index.startServer();

test('that the http version works', () => {
  request('localhost:8080').get('/');
  index.stopServer();
});
