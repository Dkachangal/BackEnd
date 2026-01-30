const http = require('http');
const PORT = 4000;
let count = 0;
const server = http.createServer((req, res) => {
    console.log(req.url);
    count = count + 1;
    console.log(count);
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.write('<h1>This is the main page</h1>');
    
        res.write('<form method = "POST" action = "/formSubmitted">');
        res.write('<input type="text" name="username" placeholder ="Enter your name"/><br>');
        res.write('<input type="submit" name = "submit" value = "clickMe"/>');
        res.write('</form>');
    } else {
        res.write('<h1>The form has been submitted</h1>');
        res.write('<a href= "http://localhost:4000/">Go Back!</a>');
    }
    
});

server.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});