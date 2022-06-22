// const { ifError } = require('assert');
// const { error } = require('console');
const fs = require('fs');
const superagent = require('superagent');

// build promises
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('I could not write that file');
      resolve('success');
    });
  });
};

//async await
const ambilGambarAnjing = async () => {
  try {
    const namaAnjing = await readFilePromise(`${__dirname}/starter/dog.txt`);
    console.log(`Breed: ${namaAnjing}`);

    const tulisNamaAnjing = await superagent.get(
      `https://dog.ceo/api/breed/${namaAnjing}/images/random`
    );
    console.log(tulisNamaAnjing.body.message);

    await writeFilePromise(
      './starter/dog-img.txt',
      tulisNamaAnjing.body.message
    );
    console.log('Random dog image saved to file');
  } catch (err) {
    console.log(err);

    throw err;
  }
  return '2: Ready 🐶🦴';
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    //cara jonas schmedtmann
    // const x = await ambilGambarAnjing();
    // console.log(x);

    //yang gw temukan saat latihan
    console.log(await ambilGambarAnjing());
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('ERROR 💥');
  }
})();

/*
console.log('1: Will get dog pics!');
ambilGambarAnjing()
  .then((x) => {
    console.log(x);
    console.log('3: Done getting dog pics!');
  })
  .catch((err) => {
    console.log('ERROR 💥');
  });
/*
// build promises
/*
readFilePromise(`${__dirname}/starter/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePromise('./starter/dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file');
  })
  .catch((err) => {
    console.log(err);
  });
*/

// readFilePromise(`${__dirname}/starter/dog.txt`).then((anjing) => {
//   console.log(`Breed: ${anjing}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${anjing}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile('./starter/dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log('Random dog image saved to file');
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });

// //callbacks
// fs.readFile(`${__dirname}/starter/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile('./starter/dog-img.txt', res.body.message, (err) => {
//         console.log('Random dog image saved to file');
//       });
//     });
// });

// //consume promises
// fs.readFile(`${__dirname}/starter/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile('./starter/dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log('Random dog image saved to file');
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });
