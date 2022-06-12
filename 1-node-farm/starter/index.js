const fs = require('fs');

// const hello = 'Hello World';
// console.log(hello);

const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
console.log(textIn);
