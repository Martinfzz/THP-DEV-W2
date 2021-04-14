const data = require('../parseData');

const exercice2 = (arr) => {
  let count = 1;
  let n = arr.length;
  let max = arr[n-1];
  
  for (let i = n-1; i >= 1; i--){
    for (let j = i-1; j >= 0; j--){
      if (arr[j] > max){
        max = arr[j];
        count ++;
      }
    }
  }
	console.log(count);
}

exercice2(data);