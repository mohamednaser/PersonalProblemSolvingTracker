// n: an integer representing Bobby's initial amount of money
// c: an integer representing the cost of a chocolate bar
// m: an integer representing the number of wrappers he can turn in for a free bar

function chocolateFeast(n, c, m) {
  var numberOfWrappers, numberOfChoclates;

  numberOfWrappers = numberOfChoclates = Math.floor(n / c);

  while (numberOfWrappers >= m) {
    var freeBars = Math.floor(numberOfWrappers / m);
    if (freeBars > 0) {
      numberOfChoclates += freeBars;
      numberOfWrappers -= freeBars * m;
      numberOfWrappers += freeBars;
    }
  }

  return numberOfChoclates;
}

// console.log(chocolateFeast(money with baby , cost of one choclate , required amount of wrappers ));
// console.log(chocolateFeast(10, 2, 5)); // expected output 6
// console.log(chocolateFeast(12, 4, 4)); // expected output 3
// console.log(chocolateFeast(6, 2, 2)); // expected output 5
// console.log(chocolateFeast(13112, 944, 6735)); // expected output 13
console.log(chocolateFeast(25378, 75, 909)); // expected output 116


