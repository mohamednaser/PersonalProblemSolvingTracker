function equalizeArray(arr) {
  var myMap = new Map();
  var maxCounter = 0;

  arr.map(elment => {
    if (myMap.get(elment) == undefined) {
      myMap.set(elment, 1);
    } else {
      myMap.set(elment, myMap.get(elment) + 1);
    }
  });

  for (var value of myMap.values()) {
    if (value > maxCounter) maxCounter = value;
  }

  return (arr.length) - maxCounter;
}

console.log(equalizeArray([3, 3, 2, 1, 3])); // expected result 2
