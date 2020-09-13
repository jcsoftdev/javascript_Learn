function binarySearch(data = [], item) {

  let low = 0;
  let high = data.length;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let guess = data[mid];

    if (guess === item) {
      return parseInt(mid);
    }
    
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

myData = [1, 2, 3, 6, 8, 9, 18, 34];

// the index
const result = binarySearch(myData, 8);

console.log(result);





