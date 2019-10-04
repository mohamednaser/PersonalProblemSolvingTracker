function fairRations(B) {
  var numberOfBreads = 0;

  if (B.length < 3) return "NO";

  for (let i = 0; i < B.length; i++) {
    const element = B[i];

    if (element % 2 == 0) continue;
    else {
      if (B[i + 1]) {
        B[i + 1] = B[i + 1] + 1;
        ++numberOfBreads;
      } else {
        return "NO";
      }
    }
  }

  return numberOfBreads * 2;
}

console.log(fairRations([2, 3, 4, 5, 6])); // expected result 4
console.log(fairRations([4, 5, 6, 7])); // expected result 4
console.log(fairRations([1, 2])); // expected result 'NO'
