const fs = require('fs');

// const hello = 'Hello World';
// console.log(hello);

// // Bloking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${new Date()}.\n`;
// fs.writeFileSync('./starter/txt/output.txt', textOut, 'utf-8');
// console.log('File Written');

// Non-Bloking, asynchronous way

fs.readFile('./starter/txt/start.txt', 'utf8', (err, data1) => {
  //baris ini pakai Backtick
  fs.readFile(`./starter/txt/${data1}.txt`, 'utf8', (err, data2) => {
    console.log(data2);
  });
});
console.log('Will Read File!');
