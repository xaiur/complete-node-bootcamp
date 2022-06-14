const fs = require('fs');
const http = require('http');
const url = require('url');

//--------------------------------------------FILES-------------------------------------------------//

// const hello = 'Hello World';
// console.log(hello);

// // Bloking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${new Date()}.\n`;
// fs.writeFileSync('./starter/txt/output.txt', textOut, 'utf-8');
// console.log('File Written');

// // Non-Bloking, asynchronous way
// fs.readFile('./starter/txt/startttt.txt', 'utf8', (err, data1) => {
//   if (err) return console.error('error! 💥');
//   //baris ini pakai Backtick
//   fs.readFile(`./starter/txt/${data1}.txt`, 'utf8', (err, data2) => {
//     fs.readFile(`./starter/txt/append.txt`, 'utf8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         './starter/txt/final.txt',
//         `${data2}\n${data3}`,
//         'utf8',
//         (err) => {
//           console.log('Your file has been written successfully 😃');
//         }
//       );
//     });
//   });
// });
// console.log('Will Read File!💨');

//--------------------------------------------SERVER-------------------------------------------------//
const server = http.createServer((req, res) => {
  // console.log(req.url);
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the Overview!');
  } else if (pathName === '/product') {
    res.end('This is the Product!');
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () =>
  console.log('Server listening on port 8000')
);
