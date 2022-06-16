const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

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

//kodenya sync karena hanya dieksekusi sekali di awal, makan tidak masalah funsinya membloking karena top level code yang di jalankan sekali, penting untuk mengetahui kode mana yang hanya dijalankan sekali, dan kode mana yang di jalankan berulang.
//fungsi dirname untuk bisa masuk ke file yang dituju

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //--------------------------------------------OVERVIEW-PAGE------------------------------------------//
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    //-------------------------------------------PRODUCT-PAGE------------------------------------------//
  } else if (pathname === '/product') {
    const product = dataObj[query.id];
    res.writeHead(200, { 'Content-type': 'text/html' });
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
    // console.log(query);
    // res.writeHead(200, {
    //   'Content-type': 'text/html',
    // });
    // const product = dataObj[query.id];
    // const output = replaceTemplate(tempProduct, product);
    // res.end(output);

    //------------------------------------------------API----------------------------------------------//
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    //---------------------------------------------NOT-FOUND-------------------------------------------//
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () =>
  console.log('Server listening on port 8000')
);
