const http = require('http');
const fs = require('fs');
const port = 3003;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    
    req.on('end', ()=> {
        const mergedBody = Buffer.concat(body).toString();
        const parsedObject = new URLSearchParams(mergedBody);
        const dataObject = Object.fromEntries(parsedObject);

        fs.writeFileSync('userDetails.txt', JSON.stringify(dataObject));

    });

    res.write('<h1 style = "text-align: center">Getting User Data</h1>');
    res.write('<form style = "text-align: center" method = "POST" action = "/submitted_Data"><input type="text" name="username" placeholder="Enter your name"/><br><input type="radio" name="gender" value="male"/>Male<input type="radio" name="gender" value="female"/>Female<br><input type="submit" value="Submit"/></form>');

    req.end();
});
server.listen(port, () => {
    console.log(`The link for the website is:      http://localhost:${port}`);
});