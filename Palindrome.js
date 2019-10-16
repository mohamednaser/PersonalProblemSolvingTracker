// Complete the palindromeIndex function below.
function palindromeIndex(s) {
  var start = 0,
    end = s.length;

  while (start < end) {
    if (s[start] == s[end]) {
      start++;
      end--;
    } else return start;
  }

  return -1;
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));
console.log(palindromeIndex("quyjjdcgsvvsgcdjjyq"));
