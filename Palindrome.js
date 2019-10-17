function palindromeIndex(s) {
  for (var i = 0, j = s.length - 1; i < j; i++, j--)
    if (s.charAt(i) != s.charAt(j))
      if (isPalindrome(s, i)) return i;
      else if (isPalindrome(s, j)) return j;
  return -1;
}

function isPalindrome(s, index) {
  for (var i = index + 1, j = s.length - 1 - index; i < j; i++, j--)
    if (s.charAt(i) != s.charAt(j)) return false;
  return true;
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));
console.log(palindromeIndex("quyjjdcgsvvsgcdjjyq"));
