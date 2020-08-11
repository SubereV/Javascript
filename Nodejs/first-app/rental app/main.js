const path = require('path');
const os = require('os');
const fs = require('fs');

var obj = path.parse(__filename);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

fs.readdir("../workingWithJson", (error, result) => {
    console.log(result || error);
})