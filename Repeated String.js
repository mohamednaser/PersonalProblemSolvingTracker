function repeatedString(s, n) {
  var subsetLength = s.length;
  var numberofletterAinOneSet = 0;

  // get count of repated 'A' letter in one subset
  for (let index = 0; index < s.length; index++) {
    if (s[index] == "a") numberofletterAinOneSet++;
  }

  if (numberofletterAinOneSet == 0) return 0; // there is no 'a' letter on our subset
  if (subsetLength == 1) return n;

  // in case n is lower than subset length
  if (n <= subsetLength) {
    var counterOfLettera = 0;

    for (let index = 0; index <= n; index++) {
      if (s[index] == "a") counterOfLettera++;
    }

    return counterOfLettera;
  }

  // in cse n is bigger than  subset length so we need more than one subset
  if (n % subsetLength == 0) {
    return Math.floor(n / subsetLength) * numberofletterAinOneSet;
  } else {
    var remianCharcters = n % subsetLength;
    var numberofAletterinREmainingset = 0;

    for (let index = 0; index < remianCharcters; index++) {
      if (s[index] == "a") numberofAletterinREmainingset++;
    }

    return (
      Math.floor(n / subsetLength) * numberofletterAinOneSet +
      numberofAletterinREmainingset
    );
  }
}

console.log(repeatedString("abcac", 10)); // expected result is 4
console.log(repeatedString("x", 970770)); // expected result is 0
console.log(repeatedString("abcacabcacabcacabcac", 5)); // expected result is 3
