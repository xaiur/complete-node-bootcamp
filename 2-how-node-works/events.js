const EventEmitter = require('node:events');

//Kelas EventEmitter didefinisikan dan diekspos oleh modul node:events:
//Bisa juga ditulis seperti di bawah ini 👇
//const EventEmitter = require('node:events');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There was new Sale!');
});
myEmitter.on('newSale', () => {
  console.log('Costumer name: Hermawan Rinnaldi');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit('newSale', 998);
