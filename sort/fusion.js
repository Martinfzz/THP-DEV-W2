let mergeComparisons = 0;

const mergeSort = (inputArr) => {

  const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
        mergeComparisons ++;
    }
    
    finalArr = [ ...arr, ...left, ...right ];
    return [ ...arr, ...left, ...right ];
  }

  const mergeSortIt = (array) => {
    const half = array.length / 2;
    
    if(array.length < 2){
      return array;
    }
    
    const left = array.splice(0, half);
    

    return merge(mergeSortIt(left),mergeSortIt(array));
  }
  
  mergeSortIt(inputArr);
  console.log(`Tri fusion: ${mergeComparisons} comparaisons - [${finalArr}]`);
}

module.exports = mergeSort;
