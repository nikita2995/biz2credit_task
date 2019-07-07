/***************************External NPM Module************************/
const fs = require('fs');

/***************************Internal Module***************************/
const idCalculator = require('..');

//Getting data from file
let data = fs.readFileSync(__dirname + '/test.txt').toString().split("\n");
for (i in data) {
  data[i] = JSON.parse(data[i]);
}

console.log(idCalculator(data));