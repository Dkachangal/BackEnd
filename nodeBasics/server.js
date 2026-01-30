const http = require('http');
const PORT = 3000

const server = http.createServer((req, res)=> {
    console.log(req);
});
// server(3000);
server.listen(PORT, ()=> {
    console.log(`this is the link http://${PORT}`);
    
});
// console.log(http);