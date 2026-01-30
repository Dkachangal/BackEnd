const http = require('http');
const port = 4003;
// port = 4003;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');

    if (req.url.toLowerCase() === '/') {
        res.write('<a href="http://localhost:4002/home" style = "padding: 30px">Home</a>');
        res.write('<a href="http://localhost:4002/men" style = "padding: 30px">Men</a>');
        res.write('<a href="http://localhost:4002/women" style = "padding: 30px">Women</a>');
        res.write('<a href="http://localhost:4002/kids" style = "padding: 30px">Kids</a>');
        res.write('<a href="http://localhost:4002/cart" style = "padding: 30px">Cart</a>');
    }
    else if (req.url.toLowerCase() === '/home') {
        res.write('<h1>HOME</h1>');
        res.write('<a href = "http://localhost:4002">nav bar</a>');
    }

    else if (req.url.toLowerCase() === '/men') {
        res.write('<h1>Welcome to mens section</h1>');
        res.write('<a href = "http://localhost:4002">nav bar</a>');
    }
    else if (req.url.toLowerCase() === '/women') {
        res.write('<h1>Welcome to women\'s section</h1>');
        res.write('<a href = "http://localhost:4002">nav bar</a>');
    }
    else if (req.url.toLowerCase() === '/kids') {
        res.write('<h1>Welcome to kid\'s section</h1>');
        res.write('<a href = "http://localhost:4002">nav bar</a>');
    }
    else if (req.url.toLowerCase() === '/cart') {
        res.write('<h1>This is your cart</h1>');
        res.write('<a href = "http://localhost:4002">nav bar</a>');
    }
    // res.end();
});

server.listen(port, () => {
    console.log(`http://localhost:${port}`);

});