function findDigits(n) {
  var counter = 0;
  var stringNumber = n.toString();

  for (let index = 0; index < stringNumber.length; index++) {
    var element = stringNumber[index];
    if (n % element == 0) {
      counter++;
    }
  }
  return counter;
}

// console.log(findDigits(111)); // expected 3 
console.log(findDigits(106108048)); // expected 3
