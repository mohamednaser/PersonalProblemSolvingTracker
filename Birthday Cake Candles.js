function birthdayCakeCandles(ar) {
  var tallest = 0;

  ar.map(element => {
    if (element > tallest) tallest = element;
  });

  if (tallest == 0) return 0;
  else {
    var counter = 0;

    ar.map(element => {
      if (element == tallest) counter++;
    });

    return counter;
  }
}

console.log(birthdayCakeCandles([3 , 2 , 1 , 3]));
