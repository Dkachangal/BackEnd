const add = require('./addition');

const reqHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('<h1 style="text-align: center; border: 2px solid black;">Welcome</h1><h3 style="text-align: center;"><a href="/calculator">Calculator</a></h3>');
    } 
    else if (req.url === '/calculator') {
        const body = [];
        res.write('<h1 style="text-align: center;">Calculator</h1>');
        res.write('<form method="post" action = "/calculatedResult" style="text-align: center;"><input type="text" name="num1" placeholder="Enter Number 1"><br><input type="text" name="num2" placeholder="Enter number 2"><br><button type="submit">Calculate</button></form>');

        res.write('<p style="text-align: center;"><a href="/">Go To Home</a></p>');
    }
    else if (req.url === '/calculatedResult') {
        return add(req, res);

    }
    else {
        res.write('<h1 style="text-align: center; border: 2px solid black;">404 Page Not Found</h1>');
        res.write('<h3 style="text-align: center;"><a href="/">Go To Home</a></h3>')
    }
    return res.end();
};

module.exports.requestHandler = reqHandler;