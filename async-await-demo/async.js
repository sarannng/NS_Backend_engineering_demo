const fs = require("fs");

console.log("1");

fs.readFile("file.txt", (eror, data) => console.log(data));

console.log("2");