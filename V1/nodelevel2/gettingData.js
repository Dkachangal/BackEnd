const http = require('http');
const port = 3002;
const server = http.createServer((req, res) => {

    const body = [];

    req.on('data', (chunk)=> {
        body.push(chunk);
        console.log(chunk);
    });
    req.on('end',()=> {
        console.log('Request ended');
        console.log(Buffer.concat(body).toString());
    });
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This is some text ....</h1>');
    res.write('<form method = "POST">');
    res.write('<input type="text" name="username" placeholder="Enter your username">');
    res.write('<button type="submit">Submit</button>');

    res.write('</form>');

    res.end();

});


server.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});