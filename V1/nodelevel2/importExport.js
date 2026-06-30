const http = require('http');
const getData = require('./getDataFromUserRev2');
const server = http.createServer(getData);

server.listen(3003, () => {
    console.log(`http://localhost:3003`);
});