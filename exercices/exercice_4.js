const data = require('../parseData');

const exercice4 = (arr) => {
  let count = 0;
  let max = 0;
  arr.reverse().map((element) => {
    if (element > max){
      count ++;
      max = element;
    }
  })  
	console.log(count);
}

exercice4(data);