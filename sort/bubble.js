let bubbleComparisons = 0;

const bubbleSort = (inputArr) => {
  let n = inputArr.length;
  let sorted = false;    
  while (!sorted) {
    sorted = true;
    for(let i = 0; i < n; i++){
      if(inputArr[i] > inputArr[i+1]){
        let t = inputArr[i];
        inputArr[i] = inputArr[i+1];
        inputArr[i+1] = t;
        sorted = false;
        bubbleComparisons ++;
      }
    }
  }
  console.log(`Tri à bulle: ${bubbleComparisons} comparaisons - [${inputArr}]`);
}

module.exports = bubbleSort;
