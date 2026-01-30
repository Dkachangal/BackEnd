const http = require('http');
const PORT = 3002;

const server = http.createServer((req, res)=> {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: blue;">Hello World</h1>');
    res.end();
});

server.listen(PORT, ()=> {
    console.log(`Server is live at : http://localhost:${PORT}`);
});