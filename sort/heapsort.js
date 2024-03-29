let heapComparisons = 0;

const heapSort = (arr) => {
  let len = arr.length,
  end = len-1;

  heapify(arr, len);
  
  while(end > 0){
    swap(arr, end--, 0);
    siftDown(arr, 0, end);
    heapComparisons++;
  }
  console.log(`Tri par tas: ${heapComparisons} comparaisons - [${arr}]`);
}

const heapify = (arr, len) => {
  let mid = Math.floor((len-2)/2);
  while(mid >= 0){
    siftDown(arr, mid--, len-1);
    heapComparisons++;
  }
}

const siftDown = (arr, start, end) => {
  let root = start,
  child = root*2 + 1,
  toSwap = root;
  while(child <= end){
    if(arr[toSwap] < arr[child]){
      swap(arr, toSwap, child);
      heapComparisons++;
    }
    if(child+1 <= end && arr[toSwap] < arr[child+1]){
      swap(arr, toSwap, child+1);
      heapComparisons++;
    }
    if(toSwap != root){
      swap(arr, root, toSwap);
      root = toSwap;
      heapComparisons++;
    }
    else{
      return; 
    }
    toSwap = root;
    child = root*2+1;
    heapComparisons++;
  }
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
   
module.exports = heapSort;