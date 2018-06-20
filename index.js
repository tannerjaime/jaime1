console.log('Hello World!');

const http = require('http');
const requestListener = (req, res) => {
  const maybeNumber = req.url.substr(1);

  if (/^\d+$/.test(maybeNumber)) {
    const number = parseInt(maybeNumber);
    console.log('got a request:', number);

    console.log(fibonacci(number));
    res.end();
  }
  else {
    console.error('got a bad request:', maybeNumber);
    res.statusCode = 400;
    res.end();
  }
};

function fibonacci(number) {
  if (number === 1) return 1;
  if (number < 1) return 0;

  return fibonacci(number - 1) + fibonacci(number - 2);
}

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
