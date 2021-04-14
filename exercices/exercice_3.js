const data = require('../parseData');
const k = Number(process.argv[3]);

if (!k) {
  throw new Error('Please provide a valid number.')
}

const exercice1 = (arr, resultK) => {
  for (let i = 1; i < arr.length; i++){
		if (arr[0] + arr[i] === resultK){
      return console.log(true);
		}
	}
	return console.log(false);
}

exercice1(data, k);