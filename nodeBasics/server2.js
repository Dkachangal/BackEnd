const http = require('http');

const PORT = 3043;

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(PORT);