const data = require('./parseData');
const k = Number(process.argv[3]);
let comparisons = 0;

if (!k) {
  throw new Error('Please provide a valid number.')
}

const exercice1 = (numbers, resultK) => {
  return numbers.some((value1, index1) => {
      return numbers.some((value2, index2) => {
          if (index2 === index1) {
              return false;
          }
          comparisons += 1;
          return ((value1 + value2) === resultK);
      });
  });
}

const result = exercice1(data, k);
console.log(result);