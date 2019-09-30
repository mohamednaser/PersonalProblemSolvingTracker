// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
  var countBeatfulTriplets = 0;
  var counter = 0;

  arr.forEach(element => {
    for (let x = counter; x <= counter + d ; x++) {
      if (arr[x] - element == d) {
        for (let y = x; y <= x + d; y++) {
          if (arr[y] - arr[x] == d) {
            ++countBeatfulTriplets;
          }
        }
      }
    }
    ++counter;
  });

  return countBeatfulTriplets;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); // expected outbut 3
console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19])); // expected outbut 2
