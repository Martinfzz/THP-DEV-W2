const data = require('../parseData');

const exercice4 = (arr) => {
  let count = 1;
  let n = arr.length;
  let max = arr[n-1];
  for (let i = n-1; i >= 1; i--){
    if (arr[i] > max){
      max = arr[i];
      count ++;
    }
  }
	console.log(count);
}

exercice4(data);