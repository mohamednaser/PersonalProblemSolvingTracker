function gameOfThrones(s) {
  var hashMap = {};

  var numberOfCharsHaveFrequentlyOne = 0;
  var allCharsHaveEvenFrequentBoolean = false;
  var objectCounter = 0;

  // create Hash Map For Char frequently
  for (let index = 0; index < s.length; index++) {
    if (hashMap[s[index]]) {
      hashMap[s[index]] = hashMap[s[index]] + 1;
    } else {
      hashMap[s[index]] = 1;
      objectCounter++;
    }
  }

  if (objectCounter == 2) {
    var firstLetterFrequently = 0,
      secondLetterFrequently = 0;
    var counterx = 0;
    for (var elment in hashMap) {
      if (counterx == 0) firstLetterFrequently = hashMap[elment];
      else secondLetterFrequently = hashMap[elment];

      counterx++;
    }

    ((firstLetterFrequently - secondLetterFrequently) || (secondLetterFrequently - firstLetterFrequently))?'YES':'NO';
  } else {
    for (var elment in hashMap) {
      if (hashMap[elment] == 1) {
        numberOfCharsHaveFrequentlyOne++;
        if (numberOfCharsHaveFrequentlyOne > 1) return "NO";
      }

      if (hashMap[elment] % 2 == 0) {
        if (allCharsHaveEvenFrequentBoolean) return "NO";
        else continue;
      } else {
        allCharsHaveEvenFrequentBoolean = true;
      }
      // console.log("key in hashmap ", elment, hashMap[elment]);
    }
  }
  return "YES";
}

console.log(gameOfThrones("aaabbbb")); // expected result YES
// console.log(gameOfThrones("cdefghmnopqrstuvw")); // expected result NO
console.log(gameOfThrones("cdcdcdcdeeeef")); // expected result YES
// console.log(gameOfThrones("aaabbccdd")); // expected result YES
// console.log(gameOfThrones('aaabbbb'));// expected result YES
