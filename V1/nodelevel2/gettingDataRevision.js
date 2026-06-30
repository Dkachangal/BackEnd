const http = require('http');
const fs = require('fs');
const { constants } = require('buffer');
const port = 3003;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<form method="POST" action="/submitted"><input type="text" name="username" placeholder="Enter your name"/><br><input type="radio" name="gender" value="male"/>Male<input type="radio" name="gender" value="female"/>Female<br><input type="submit" value="Submit"/></form>');
    const dataArray = [];
    req.on('data', chunk => {
        dataArray.push(chunk);
    });
    req.on('end', () => {
        console.log(dataArray);
        const mergedData = Buffer.concat(dataArray).toString();
        const formData = new URLSearchParams(mergedData);
        const obj = Object.fromEntries(formData);
        fs.writeFileSync('userDetails2.txt', JSON.stringify(obj));
        console.log(formData);


    });
});
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});