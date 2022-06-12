const fs = require('fs');

// const hello = 'Hello World';
// console.log(hello);

const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${new Date()}.\n`;
fs.writeFileSync('./starter/txt/output.txt', textOut, 'utf-8');

console.log('File Written');
