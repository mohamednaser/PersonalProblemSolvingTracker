function timeInWords(h, m) {
  if (m == 0) return getHourInWord(h) + " o' clock";

  if (m <= 30) return getMinuteInWord(m) + " past " + getHourInWord(h);

  if (m > 30) return getMinuteInWord(60 - m) + " to " + getHourInWord(h + 1);
}

function getHourInWord(hour) {
  switch (hour) {
    case 1:
      return "one";

    case 2:
      return "two";

    case 3:
      return "three";

    case 4:
      return "four";

    case 5:
      return "five";

    case 6:
      return "six";

    case 7:
      return "seven";

    case 8:
      return "eight";

    case 9:
      return "nine";

    case 10:
      return "ten";

    case 11:
      return "eleven";

    case 12:
      return "twelve";

    case 13:
      return "thirteen";

    case 14:
      return "fourteen";

    case 15:
      return "fifteen";

    case 16:
      return "sixteen";

    case 17:
      return "seventeen";

    case 18:
      return "eighteen";

    case 19:
      return "nineteen";

    case 20:
      return "twenty";

    case 21:
      return "twenty one";

    case 22:
      return "twenty two";

    case 23:
      return "twenty three";

    case 24:
      return "twenty four";

    case 25:
      return "twenty five";

    case 26:
      return "twenty six";

    case 27:
      return "twenty seven";

    case 28:
      return "twenty eight";

    case 29:
      return "twenty nine";

    default:
  }
}

function getMinuteInWord(minute) {
  if (minute != 1 && minute != 15 && minute != 30)
    return getHourInWord(minute) + " minutes";

  switch (minute) {
    case 1:
      return "one minute";
    case 15:
      return "quarter";
    case 30:
      return "half";
  }
}

// console.log(timeInWords(5, 00));
// console.log(timeInWords(5, 15)); // expected
// console.log(timeInWords(5, 30)); // expected
// console.log(timeInWords(5, 47)); // expected
console.log(timeInWords(6, 35)); // expected

// console.log(timeInWords(5, 01)); //expected resulte one minute past five
