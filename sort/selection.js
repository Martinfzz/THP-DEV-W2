let selectComparisons = 0;


const sort_selection = (inputArr) => { 
  let n = inputArr.length;
      
  for(let i = 0; i < n; i++) {
    let min = i;
    for(let j = i+1; j < n; j++){
      if(inputArr[j] < inputArr[min]) {
        min=j;
      }
      selectComparisons ++;
    }
    if (min != i) {
      let tmp = inputArr[i]; 
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  console.log(`Tri par selection: ${selectComparisons} comparaisons - [${inputArr}]`);
}

module.exports = sort_selection;

