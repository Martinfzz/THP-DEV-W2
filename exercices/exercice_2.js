const data = require('../parseData');

const exercice2 = (arr) => {
  let count = 1;
  let n = arr.length;
  let max = arr.indexOf(Math.max(...arr));
  let newArr = []; 
  if (Math.max(...arr) == arr[n-1]){
    count = 1;
    console.log(count);
    return;
  }
  for (let i = max; i < (n); i++){
    if (arr[i] > arr[i+1]){
      newArr.push(arr[i]);
    }
  }
  newArr.push(arr[n-1]);
  count = newArr.length;
	console.log(count);
}

exercice2(data);