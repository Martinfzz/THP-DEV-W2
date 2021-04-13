const quickSort = (data) => {
  let quickSortComparisons = 0;
  const pivot = (arr, start, end) => {
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
      
      }
      quickSortComparisons ++;
    }
    
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    
    return pivotIndex;
  };

  const quickSortIt = (inputArr, start, end) => {
  if (start >= end) {
    return;
  }
  
  let index = pivot(inputArr, start, end);
  
  quickSortIt(inputArr, start, index - 1);
  quickSortIt(inputArr, index + 1, end);
  return inputArr;
  }
  quickSortIt(data, 0, data.length - 1);
  console.log(`Tri rapide: ${quickSortComparisons} comparaisons - [${data}]`);
}

module.exports = quickSort;

