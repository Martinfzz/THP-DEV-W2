const fs = require('fs');

const cocktailShakerSort = require('./sort/cocktailShaker');
const mergeSort = require('./sort/fusion');
const heapSort = require('./sort/heapsort');

const fileName = process.argv[2];

try {
  if (!fileName) {
    throw new Error("Please provide a file to read.");
  }

  const data = fs.readFileSync(fileName, 'utf8');

  const numbers = data.split(' ')
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));

  cocktailShakerSort([...numbers]);
  mergeSort([...numbers]);
  heapSort([...numbers]);
} catch (error) {
  console.error(error.message);
}