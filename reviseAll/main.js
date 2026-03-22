// const http = require('http');
// const PORT = 3002;

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1> Hello World</h1>');
//     res.write('<h4>Hello world</h4>');
// });

// server.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
// });

const app = express();
app.use((req, res) => {
    res.send("hello world");
});


// const app = express();

// app.use((req, res) => {
//     res.send('Hello World');
// });
// app.get('/', (req, res) => {
//     app.send('Hello World');
// });

// app.get('/about', (req, res) => {
//     res.send('About page');
// });

app.listen(3002, () => {
    console.log(`localhost://3002`);
});

// app.listen(2001, () => {
//     console.log(`http://localhost:2001`);
// });