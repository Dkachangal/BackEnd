const http = require('http');
const port = 3002;
const { requestHandler  } = require('./reqHandel');
const add = require('./addition');

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});