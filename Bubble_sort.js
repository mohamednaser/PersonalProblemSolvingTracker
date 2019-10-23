function countSwaps(unSortedArray) {
  var swapCount = 0;
  for (let x = 0; x < unSortedArray.length; x++) {
    for (let index = 0; index < unSortedArray.length; index++) {
      if (unSortedArray[index + 1] != undefined) {
        if (unSortedArray[index + 1] < unSortedArray[index]) {
          var temp = unSortedArray[index];
          unSortedArray[index] = unSortedArray[index + 1];
          unSortedArray[index + 1] = temp;
          swapCount++;
        }
      }
    }
  }

  console.log("Array is sorted in " + swapCount + " swaps.");
  console.log("First Element: " + unSortedArray[0]);
  console.log("Last Element: " + unSortedArray[unSortedArray.length - 1]);
}

// console.log(countSwaps([1, 2, 3]));
console.log(countSwaps([3, 2, 1]));
// console.log(bubble_sort([4, 3, 78, 2, 0, 2]));
// console.log(bubble_sort([5, 3, 2]));


// challenage link https://www.hackerrank.com/challenges/ctci-bubble-sort/problem