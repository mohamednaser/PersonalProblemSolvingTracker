function findMedian(arr) {
  var arrayLength = arr.length;

  if (arrayLength % 2 == 0) return false;

  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[Math.floor(arrayLength / 2)];
}

console.log(findMedian([9, 7, 1, 2, 3, 4, 5]));
