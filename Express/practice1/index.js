const http = require('http');
const port = 3002;
const server = http.createServer((req, res) => {
    console.log(req.url);
});


server.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});