require('dotenv').config();
require('node:dns/promises').setServers(['1.1.1.1', '8.8.8.8']);
const app = require('./src/app');

app.listen(3000, () => {
    console.log("Server Started");
})