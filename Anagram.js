function anagram(s) {
  // check length if odd or not
  if (s.length % 2 != 0) return -1;

  var ChangesCounter = 0;
  var leftWord = s.substring(0, s.length / 2);
  var rightWord = s.substring(s.length / 2, s.length + 1);

  leftWord = leftWord
    .split("")
    .sort()
    .join("");
  rightWord = rightWord
    .split("")
    .sort()
    .join("");

  // get frquency of evrey letter
  var leftFrequency = {},
    rightFrequancy = {};

  for (let i = 0; i < leftWord.length; i++) {

    leftFrequency[leftWord[i]] = leftFrequency[leftWord[i]] ? leftFrequency[leftWord[i]] + 1 : 1;
    rightFrequancy[rightWord[i]] = rightFrequancy[rightWord[i]] ? rightFrequancy[rightWord[i]] + 1 : 1;
  }

  for(var letterFrquently in leftFrequency){

    var frequencyCountInRightString = (rightFrequancy[letterFrquently] == undefined)?0:rightFrequancy[letterFrquently];
    if(leftFrequency[letterFrquently] > frequencyCountInRightString)
        ChangesCounter += (leftFrequency[letterFrquently] - frequencyCountInRightString);
  }

  return ChangesCounter;
}

// console.log(anagram("xaxbbbxx")); // expected 1
// console.log(anagram("ubulzt")); // expected 3

console.log(anagram("dnqaurlplofnrtmh")); // expected 5
// console.log(anagram("hhpddlnnsjfoyxpciioigvjqzfbpllssuj")); // expected 13
