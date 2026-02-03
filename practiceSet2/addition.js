const sum = (req, res) => {
    let ans = 0;
    const body = [];
    req.on('data', (chunk)=> {
        body.push(chunk);
        console.log("pushed");
    });
    req.on('end', ()=> {
        const mergedBody = Buffer.concat(body).toString();
        const dataObj = new URLSearchParams(mergedBody);
        const data = Object.fromEntries(dataObj);
        const result = ((Number(data.num1)) + (Number(data.num2)));
        ans = result;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1 style="text-align: center; border: 2px solid black;">Your Result is: ${ans} </h1>`);
        res.write('<p style="text-align: center;"><a href="/calculator">Go To Calculator</a></p>');
        // return res.end();
    });
}
module.exports = sum;