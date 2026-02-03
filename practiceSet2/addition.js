const sum = (req, res) => {
    const body = [];
    req.on('data', (chunk)=> {
        body.push(chunk);
        console.log("pushed");
    });
    req.on('end', ()=> {
        const mergedBody = Buffer.concat(body).toString();
        console.log(mergedBody);
    });
}
module.exports = sum;