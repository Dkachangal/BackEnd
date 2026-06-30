const http = require('http');
const port = 3002;

const server = http.createServer((req, res) => {
    const jsonObject = {};

    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', ()=> {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const mergedArrayOfData = new URLSearchParams(parsedBody);
        console.log(mergedArrayOfData);
        for (let [key, value] of mergedArrayOfData.entries()) {
            jsonObject[key] = value;
        }
        console.log(Object.fromEntries(mergedArrayOfData));
        console.log(jsonObject);
    });
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Getting Key-Value Pairs from an Object</h1>');
    res.write('<form method="POST" action="/submitForm">');
    res.write('<input type = "text" placeholder = "Enter your name" name = "username"/><br>');
    res.write('<input type = "radio" name = "gender" value = "male"/>Male');
    res.write('<input type = "radio" name = "gender" value = "female"/>Female<br>');
    res.write('<input type = "submit" value = "submit"/>');

    res.write('</form>');

    res.end();
});

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

