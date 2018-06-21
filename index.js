console.log('Hello World!');
const mathfuncs = require('./mathfuncs');

const HTTP_RESPONSE_ENCODING = 'utf8';
const http = require('http');
const requestListener = (req, res) => {
  const maybeNumber = req.url.substr(1);

  if (/^\d+$/.test(maybeNumber)) {
    const number = parseInt(maybeNumber);
    console.log('got a request:', number);

    res.write(`${mathfuncs.fibonacci(number)}`, HTTP_RESPONSE_ENCODING);
    res.end();
  } else {
    console.error('got a bad request:', maybeNumber);
    res.statusCode = 400;
    res.end();
  }
};

const debug = eventName => (...args) => console.log(eventName, args);

const server = http.createServer();

server.on('close', debug('close'));
// server.on('connection', debug('connection'));
server.on('error', debug('error'));
server.on('listening', debug('listening'));
server.on('checkContinue', debug('checkContinue'));
server.on('checkExpectation', debug('checkExpectation'));
server.on('clientError', debug('clientError'));
server.on('connect', debug('connect'));
server.on('request', requestListener);
server.on('upgrade', debug('upgrade'));

server.listen(8080);

module.exports = {
  startServer,
  stopServer
}