// const obj = {
//     'this': 'that',
// }
// console.log(obj.this);


// const http = require('http');
// const fs = require('fs');
// const port = 3001;

// function to handle requests and responses
const reqHandeler = (req, res) => {
    const fs = require('fs');
    res.setHeader('Content-Type', 'text/html');
    res.write('<form method="POST" action="/submitted"><input type="text" name="username" placeholder="Enter your name"/><br><input type="radio" name="gender" value="male"/>Male<input type="radio" name="gender" value="female"/>Female<br><input type="submit" value="Submit"/></form>');
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req.on('end', ()=> {
        const data = Buffer.concat(body).toString();
        const parameters = new URLSearchParams(data);
        const dataObject = Object.fromEntries(parameters);
        fs.writeFileSync('data.txt', JSON.stringify(dataObject));
    });
}
module.exports = reqHandeler;

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<form method="POST" action="/submitted"><input type="text" name="username" placeholder="Enter your name"/><br><input type="radio" name="gender" value="male"/>Male<input type="radio" name="gender" value="female"/>Female<br><input type="submit" value="Submit"/></form>');
//     const body = [];
//     req.on('data', chunk => {
//         body.push(chunk);
//     });
//     req.on('end', ()=> {
//         const data = Buffer.concat(body).toString();
//         const parameters = new URLSearchParams(data);
//         const dataObject = Object.fromEntries(parameters);
//         fs.writeFileSync('data.txt', JSON.stringify(dataObject));
//     });
// });

// server.listen(port, ()=> {
//     console.log(`http://localhost:${port}`);
// });