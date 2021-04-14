let cocktailShakerComparisons = 0;

const cocktailShakerSort = (arr) => {

  let isSorted = true;
  while (isSorted){
    for (let i = 0; i< arr.length - 1;i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i+1] = temp;
        isSorted = true;
        
      }
    cocktailShakerComparisons ++;
    }
 
    if (!isSorted) {
      break;
    }
 
    isSorted = false;
 
    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j-1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSorted = true;
        
      }
    cocktailShakerComparisons ++;
    }
    cocktailShakerComparisons ++;
  } 
  console.log(`Tri cocktail: ${cocktailShakerComparisons} comparaisons - [${arr}]`);
}

module.exports = cocktailShakerSort;