const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1
  // fs.readFile("./starter/test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //Solution 2: Streams
  //Masalah yang ditimbulkan dari solusi 2 adalah #backpressure; terjadi karena readeble streams (aliran baca) jauh lebih cepat daripada response.
  //   const readable = fs.createReadStream(`./starter/test-file.txt`);
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found!");
  //   });
  //Solution 3
  //memperbaiki backpressure menggunakan pipe (ini merupakan pilihan terbaik)
  const readable = fs.createReadStream(`./starter/test-file.txt`);
  readable.pipe(res);
  //readableSource.pipe(writeableDestination)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
