function happyLadybugs(b) {
  var nuberOfBlanks = 0;
  var myMap = new Map();

  for (let i = 0; i < b.length; i++) {
    const elment = b[i];

    if (elment == "_") {
      nuberOfBlanks++;
      continue;
    } 

    if (myMap.get(elment) == undefined) {
        myMap.set(elment, 1);
      } else {
        myMap.set(elment, myMap.get(elment) + 1);
      }
  }

  myMap.forEach(key => value ){
    console.log(value)
  }
  return myMap;
}

console.log(happyLadybugs("RBY_YBR"));
