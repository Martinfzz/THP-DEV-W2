const data = require('../parseData');

const exercice2 = (arr) => {
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
exercice2(data);