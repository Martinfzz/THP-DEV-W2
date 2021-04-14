const data = require('../parseData');
const k = Number(process.argv[3]);
let comparisons = 0;

if (!k) {
  throw new Error('Please provide a valid number.')
}

const exercice1 = (arr, resultK) => {
  for (let i = 1; i <= (arr.length - 1); i++){
		for (let j = 0; j < (arr.length - i); j++){
			if (arr[i-1] + arr[j+i] === resultK){
			  return console.log(true);
			}
		}
	}
	return console.log(false);
}

exercice1(data, k);
