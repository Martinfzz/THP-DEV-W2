let insertComparisons = 0;

const sort_insert = (inputArr) => {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    let current = inputArr[i];
    let j = i-1; 
    while ((j > -1) && (current < inputArr[j])) {
      inputArr[j+1] = inputArr[j];
      j--;
      insertComparisons ++;
    }
    inputArr[j+1] = current;
  }
  console.log(`Tri par insertion: ${insertComparisons} comparaisons - [${inputArr}]`);
}

module.exports = sort_insert;

