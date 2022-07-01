const fs = require('fs');
const express = require('express');

const app = express();

//middleware function (express.json()) (function yang dapat memodify data yang masuk)
app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ messege: 'Hello from server side!', app: 'Natour' });

// });
// app.post('/', (req, res) => {
//   res.send('You cant post to thist endpoint...'); \folder\t0F2jDK
// });

// dirnam merujuk pada lokasi folder tempat script ini berada
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
// nama fungsi ini route handler
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);

  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
