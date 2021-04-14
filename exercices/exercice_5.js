const data = require('../parseData');
const k = Number(process.argv[3]);

if (!k) {
  throw new Error('Please provide a valid number.')
}

const exercice5 = (arr, resultK) => {
  result = false;
  arr.map((element) => {
    if (arr[0] + element === resultK){
      result = true;
		}
  })	
	console.log(result);
}
exercice5(data, k);